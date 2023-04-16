import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "../entity/signUp.entity";



@Entity()
export default class Token
{
    @PrimaryColumn()
    token: string;

    @ManyToOne(() => User)
    user: User

}