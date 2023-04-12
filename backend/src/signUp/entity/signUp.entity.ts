import { profile } from "console";
import { LogIn, LogInUser } from "src/LogIn/entity/logIn.entity";
import { LogInProfile } from "src/LogIn/LogIn.controller";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        fistname: string;

    @Column()
        lastname: string;

    @Column()
        emailAddres: string

    @Column()
        password: string;

    @OneToOne(() => LogInUser, (LogIn) => LogIn.id)
    LogIn: LogIn

}