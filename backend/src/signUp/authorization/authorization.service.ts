import { Body, Injectable, Post } from "@nestjs/common";
import { DataSource, IsNull } from "typeorm";
import { CreateDto } from "../data_Dto/SignUp_create.dto";
import { User } from "../entity/signUp.entity";
import Token from "./token.entity";
import crypto from 'crypto';


@Injectable()
export class AuthorizationService{
constructor(private dataSource: DataSource){
}


//Regisztráció
@Post('signUp')
async postUser(@Body() usersDto: CreateDto){
    const usersRepository = this.dataSource.getRepository(User);

    const alrexistingUser= await usersRepository.findOne({
        where:[
            {fistname: usersDto.fistname},
            {lastname: usersDto.lastname},
            {emailAddres: usersDto.emailAddres},
            {password: usersDto.password},
        ],
    });

    if(alrexistingUser.fistname == usersDto.fistname && alrexistingUser.lastname == usersDto.lastname){
        alert('Ezzel a névvel már létezik regisztáció')
    }
    if(alrexistingUser.emailAddres == usersDto.emailAddres){
        alert('Ezzel az email címmel már létezik regisztráció')
    }
    else{
        alert('Sikeres regisztráció')
    }

    usersDto.id = undefined;
    const newUser = Object.assign(new User(), usersDto)
    console.log(newUser);
    await usersRepository.save(newUser);
}

//token

    //token generálás
        async  generateToken(user: User): Promise<string> {
        const randomToken = crypto.randomBytes(32);
        const randomTokenString = randomToken.toString('hex');
        
        try {
          const token = new Token();
          token.user = user;
          token.token = randomTokenString;
          await this.dataSource.getRepository(Token).save(token);
          return randomTokenString;
        } catch (err) {
          console.error('Error generating token:', err);
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