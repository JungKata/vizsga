
import { LogInUser } from "src/LogIn/entity/logIn.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        firstname: string;

    @Column()
        lastname: string;

    @Column()
        emailAddress: string;

    @Column()
        password: string;

    @OneToOne(() => LogInUser, (logIn) => logIn.id)
    LogIn: LogInUser

}