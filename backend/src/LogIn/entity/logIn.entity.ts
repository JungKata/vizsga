import { User } from "src/signUp/entity/signUp.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LogInUser{

    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    emailAddress: string;

    @Column()
    password: string;

    @OneToOne(() => User, (signUp) => signUp.id)
    @JoinColumn()
    signUp:User;
}