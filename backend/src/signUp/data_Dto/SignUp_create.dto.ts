import { FindOperator } from "typeorm";


export class CreateDto{
    [x: string]: any;
    fistname: any;
    lastname: string | FindOperator<string>;
    emailAddres: string | FindOperator<string>;
    password: string | FindOperator<string>;

}