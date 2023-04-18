import { IsEmail, IsNumber, IsString } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";



export class CreateUserDto{

  @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    firstname: string;

    @IsString()
    lastname: string

    @IsEmail()
    emailAddress: string;
    

    @IsString()
    password: string;
}