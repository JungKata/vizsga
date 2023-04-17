import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {LogInUser} from './LogIn/entity/logIn.entity';
import { LogInProfile } from './LogIn/LogIn.controller';
import { ProfileService } from './LogIn/LogIn.service';
import { quizMaker } from './QuizMaker/quizMaker.entitty';
import { User } from './signUp/entity/signUp.entity';
import { UserModule } from './signUp/signUp.module';
import { UserController } from './signUp/signUp.controller';
import { UserService } from './signUp/signUp.service';
import { AuthorizationController } from './signUp/authorization/authorization.controller';
import { AuthModule } from './signUp/authorization/authorization.module';
import Token from './signUp/authorization/token.entity';
import { AuthorizationService } from './signUp/authorization/authorization.service';
import TokenStrategy from './signUp/authorization/token.strategy';
import { ProfileModule } from './LogIn/LogIn.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'quizer_racer',
      entities: [
       User,LogInUser,quizMaker,Token
      ],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    ProfileModule
    
    
  ],
  controllers: [AppController,AuthorizationController,], 
  providers: [AppService, AuthorizationService, TokenStrategy, ProfileService],
})
export class AppModule {}
