import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
        passwordAgain: string;
}