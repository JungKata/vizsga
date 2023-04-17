import { BadRequestException, Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { DataSource } from "typeorm";
import { AuthorizationService } from "./authorization.service";
import profileDto from "./Dto/profileDto.dto";
import { User } from "../entity/signUp.entity";
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from "../data_Dto/SignUp_create.dto";


@Controller('authorization')
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
            profileData.password,
            user.password
        );

        if(!passMatch){
            throw new UnauthorizedException('Hibás email vagy jelszó')
        }

        var tokenForUser = await this.authorizationService.generateUserToken(user)
        return{tokenForUser}
    }
    
    
    
    
    @Post('user')
        async postRegisztracio(@Body() userData: CreateUserDto){
        const usersRepository = this.dataSource.getRepository(User)
        console.log('alma');

    //ellenőrzés
    const existingUserFromDatebase = await usersRepository.findOne({
        where:[ {firstname: userData.firstname},
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
        if(existingUserFromDatebase.firstname === userData.firstname){
            existingmessage = 'Ezzel a fistnammel már regisztráltak'
        }
        if(existingUserFromDatebase.lastname === userData.lastname){
            existingmessage = 'Ezzel a lastnammel már regisztráltak'
        }

        throw new BadRequestException(existingmessage);
    }

    try {
        const userId = userData?.id || '';
        const saveUser = Object.assign(new User(), userData);
        saveUser.id == userId;
        const passwordHash = await bcrypt.hash(saveUser.password, 10);
        saveUser.password = passwordHash;
        await usersRepository.save(saveUser);
        console.log(saveUser);
      } catch (error) {
        console.error('Error saving user to database:', error.message);
      }
      
      
      
      
      


}}
