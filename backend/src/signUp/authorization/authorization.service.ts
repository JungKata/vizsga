import { Body, Delete, Get, Injectable, Post } from "@nestjs/common";
import { DataSource, IsNull } from "typeorm";
import { CreateUserDto } from "../data_Dto/SignUp_create.dto";
import { User } from "../entity/signUp.entity";
import Token from "./token.entity";
import crypto from 'crypto';
import {randomBytes} from 'crypto';


@Injectable()
export class AuthorizationService{
constructor(private dataSource: DataSource){
}


//Regisztráció

async postUser(@Body() usersDto: CreateUserDto) {
    const usersRepository = this.dataSource.getRepository(User);
  
    const alreadyExistingUser = await usersRepository.findOne({
      where: [
        { firstname: usersDto.firstname },
        { lastname: usersDto.lastname },
        { emailAddres: usersDto.emailAddres },
        { password: usersDto.password },
      ],
    });
  
    if (alreadyExistingUser) {
      if (alreadyExistingUser.firstname === usersDto.firstname && alreadyExistingUser.lastname === usersDto.lastname) {
        return 'Ezzel a névvel már létezik regisztráció';
      }
      if (alreadyExistingUser.emailAddres === usersDto.emailAddres) {
        return 'Ezzel az email címmel már létezik regisztráció';
      }
    }
  
    usersDto.id = undefined;
    const newUser = Object.assign(new User(), usersDto);
    console.log(newUser);
    await usersRepository.save(newUser);
  
    return 'Sikeres regisztráció';
  }
  

//token

    //token generálás
    async generateUserToken(user: User, tokenLength: number = 32): Promise<Token> {
      try {
        var randomToken = randomBytes(tokenLength);
        var randomTokenString = randomToken.toString('hex');
        
        var token = new Token();
        token.user = user;
        token.token = randomTokenString;
        await this.dataSource.getRepository(Token).save(token);
        
        return token;
      } catch (error) {
        console.error('Error generating token:', error);
        throw new Error('Failed to generate token');
      }
    }
    
      

    //token user keresés
    async findUserToken( token: string){
        const tokenRepository = this.dataSource.getRepository(Token)
        const tokenUser = await tokenRepository.findOne({
            where: {token},
            relations: {user: true}
        })
        if(tokenUser == null){
            return null;
        }
        else{
            return tokenUser.user;
        }
    }

    
  //token törlés
    async deleteUserToken(token: string){
        const tokenRepository = this.dataSource.getRepository(Token);
        await tokenRepository.delete({token});
    }
    
}