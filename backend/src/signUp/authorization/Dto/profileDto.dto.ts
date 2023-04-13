import { IsString } from "class-validator";
import { IsEmail } from "class-validator";

export default class profileDto{
    
    @IsString()
    firstname: string; 
      
    @IsString()
    lastname: string;
    id: string;

    @IsEmail()
    emailAddres: string;

    @IsString()
    password: string;

    



    
}