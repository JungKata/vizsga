import { IsString } from "class-validator";
import { IsEmail } from "class-validator";

export default class profileDto{
    

    @IsEmail()
    emailAddress: string;

    @IsString()
    password: string;

    



    
}