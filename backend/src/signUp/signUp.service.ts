import { Injectable, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entity/signUp.entity";


@Injectable()
export class UserService{
    [x: string]: any;
    constructor(@InjectRepository(User) private  usersRepository: Repository<User>) { }

   

    // async getUsers(user: User): Promise<User[]> {
    //     return await this.usersRepository.find();
    // }

    async findOne(id: number): Promise<User[]> {
        return await this.usersRepository.find({
            select: ["id","firstname", "lastname", "emailAddress", "password" ],
            where: [{id}]
        });
    }

    async findAll() {
        return await this.usersRepository.find({
            select: ["firstname", "lastname", "emailAddress", "password", "id" ],
           })
      } 

    async updateUser(user: User) {
        this.usersRepository.save(user)
    }


    async remove(@Param("id") id: number): Promise<User[]> {
      return await this.service.remove(id);
    }

}