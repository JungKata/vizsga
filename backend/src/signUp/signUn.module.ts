import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './signUp.controller';
import { User } from './entity/signUp.entity';
import { UserService } from './signUp.service';

@Module({
  //imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController],
})

export class UserModule { }