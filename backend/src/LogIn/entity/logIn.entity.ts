import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LogIn{

    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    emailAddress: string;

    @Column()
    password: string;
}