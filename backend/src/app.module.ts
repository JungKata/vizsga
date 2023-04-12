import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sign } from 'crypto';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {LogInUser} from './LogIn/entity/logIn.entity';
import { LogInProfile } from './LogIn/LogIn.controller';
import { ProfileService } from './LogIn/LogIn.service';
import { quizMaker } from './QuizMaker/quizMaker.entitty';
import { User } from './signUp/entity/signUp.entity';
import { UserModule } from './signUp/signUn.module';
import { UserController } from './signUp/signUp.controller';
import { UserService } from './signUp/signUp.service';



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
       User,LogInUser,quizMaker
      ],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController,UserController, LogInProfile],
  providers: [AppService, UserService, ProfileService],
})
export class AppModule {}
