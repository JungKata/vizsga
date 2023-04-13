import { IsEmail, IsNumber, IsString } from "class-validator";
import { FindOperator } from "typeorm";


export class CreateUserDto{

  
    @IsString()
    firstname: string;

    @IsString()
    lastname: string

    @IsEmail()
    emailAddres: string;
    id: number;

    @IsString()
    password: string;
}