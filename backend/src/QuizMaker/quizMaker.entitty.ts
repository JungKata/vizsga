import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class quizMaker{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tema: string;

    @Column()
    kerdes: string;

    @Column()
    valasz_1: string;

    @Column()
    valasz_2: string;

    @Column()
    valasz_3: string;

    @Column()
    valasz_4: string;

    @Column()
    helyes_valasz: string;
}