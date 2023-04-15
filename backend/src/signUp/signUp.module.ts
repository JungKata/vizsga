import { Module } from '@nestjs/common';
import { UserController } from './signUp.controller';
import { UserService } from './signUp.service';
import { User } from './entity/signUp.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  

  providers: [UserService],
  controllers: [UserController,],
})

export class UserModule { }