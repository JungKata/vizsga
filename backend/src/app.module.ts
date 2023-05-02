import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {LogInUser} from './LogIn/entity/logIn.entity';      
import { ProfileService } from './LogIn/LogIn.service';
import { User } from './signUp/entity/signUp.entity';
import { UserModule } from './signUp/signUp.module';
import { AuthorizationController } from './signUp/authorization/authorization.controller';
import { AuthModule } from './signUp/authorization/authorization.module';
import Token from './signUp/authorization/token.entity';
import { AuthorizationService } from './signUp/authorization/authorization.service';
import TokenStrategy from './signUp/authorization/token.strategy';
import { ProfileModule } from './LogIn/LogIn.module';
import { QuizMakerModule } from './quiz-maker/quiz-maker.module';
import { quizMaker } from './quiz-maker/entities/quiz-maker.entity';
import { QuizMakerService } from './quiz-maker/quiz-maker.service';
import { QuizMakerController } from './quiz-maker/quiz-maker.controller';



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
       User,LogInUser,Token,quizMaker
      ],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    ProfileModule,
    QuizMakerModule
    
    
  ],
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {}

