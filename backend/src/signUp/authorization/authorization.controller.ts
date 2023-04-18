import { BadRequestException, Body, Controller, Delete, Post, Req, UnauthorizedException } from "@nestjs/common";
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
){}

    @Post('user')
        async postRegisztracio(@Body() userData: CreateUserDto){
        const usersRepository = this.dataSource.getRepository(User)
        

    //ellenőrzés
    const existingUserFromDatebase = await usersRepository.findOne({
        where:[ {firstname: userData.firstname},
                {lastname: userData.lastname},
                {emailAddress: userData.emailAddress},
                {password: userData.password}
            ],

    });

    if(existingUserFromDatebase){
    let existingmessage = '';
        if(existingUserFromDatebase.emailAddress === userData.emailAddress)
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
      
}

@Post('loginProfile')
    async login(@Body() profileData : profileDto){
        const usersRepository = this.dataSource.getRepository(User)
        const user = await usersRepository.findOne({
            where: {emailAddress : profileData.emailAddress},
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

    @Delete('LogOut')
    async extractToken(@Req () request){
        try{
            const authHeader = request.headers.authorization;
            if (!authHeader) {
                throw new Error('Authorization header hiányzik');
              }
              const token = authHeader.split(' ')[1];
              await this.authorizationService.deleteUserToken(token);
              return{message: 'Kijelentkezés sikeres'};
        }catch(error){
            return {error: error.message};
        }
    }
    


}
