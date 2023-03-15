import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sign } from 'crypto';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogIn} from './LogIn/entity/logIn.entity';
import { quizMaker } from './QuizMaker/quizMaker.entitty';
import { User } from './signUp/entity/signUp.entity';



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
       User,LogIn,quizMaker
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
