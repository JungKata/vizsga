import { IsString } from "class-validator";
import { IsEmail } from "class-validator/types/decorator/decorators";

export default class profileDto{
    @IsEmail()
    emailAddres: string;

    @IsString()
    password: string;

    @IsString()
    firstname: string;

    @IsString()
    lastname: string;

    
}