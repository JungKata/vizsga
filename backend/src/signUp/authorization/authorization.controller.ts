import { BadRequestException, Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { DataSource } from "typeorm";
import { AuthorizationService } from "./authorization.service";
import profileDto from "./Dto/profileDto.dto";
import { User } from "../entity/signUp.entity";
import * as bcrypt from 'bcrypt';


Controller('authorization')
export class AuthorizationController{
constructor(
private dataSource: DataSource,
private authorizationService: AuthorizationService
){

}

@Post('loginProfile')
    async login(@Body() profileData : profileDto){
        const usersRepository = this.dataSource.getRepository(User)
        const user = await usersRepository.findOne({
            where: {emailAddres : profileData.emailAddres},
        });
        if(!user){
            throw new UnauthorizedException('Hibás email vagy jelszó')
        }
        
        const passMatch = await bcrypt.compare(
            profileData.emailAddres,
            user.password
        );

        if(!passMatch){
            throw new UnauthorizedException('Hibás email vagy jelszó')
        }

        const tokenForUser = await this.authorizationService.generateToken(user)
        return{tokenForUser}
    }
    
        @Post('user')
        async postRegisztracio(@Body() userData: profileDto){
        const usersRepository = this.dataSource.getRepository(User)
        

    //ellenőrzés
    const existingUserFromDatebase = await usersRepository.findOne({
        where:[ {fistname: userData.firstname},
                {lastname: userData.lastname},
                {emailAddres: userData.emailAddres},
                {password: userData.password}
            ],

    });

    if(existingUserFromDatebase){
    let existingmessage = '';
        if(existingUserFromDatebase.emailAddres === userData.emailAddres)
        {
            existingmessage = 'Ezzel az email címmel már regisztráltak'
        }
        if(existingUserFromDatebase.fistname === userData.firstname){
            existingmessage = 'Ezzel a névvel már regisztráltak'
        }
        if(existingUserFromDatebase.lastname === userData.lastname){
            existingmessage = 'Ezzel a névvel már regisztráltak'
        }

        throw new BadRequestException(existingmessage);
    }

    try {
        const userId = userData.id ? userData.id : '';
        const saveUser = Object.assign(new User(), userData);
        saveUser.id = userId;
        const passwordHash = await bcrypt.hash(saveUser.password, 10);
        saveUser.password = passwordHash;
        await usersRepository.save(saveUser);
        console.log(saveUser);
      } catch (error) {
        console.error(error);
      }
      
      
      


}}
