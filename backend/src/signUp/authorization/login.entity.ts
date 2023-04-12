import { IsEmail, IsString } from "class-validator";



export default class LogInUser{
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}