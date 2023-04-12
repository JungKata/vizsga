import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entity/signUp.entity";


@Injectable()
export class UserService{
    [x: string]: any;
    constructor(@InjectRepository(User) private  usersRepository: Repository<User>) { }

   

    async getUsers(user: User): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async getUser(_id: number): Promise<User[]> {
        return await this.usersRepository.find({
            select: ["fistname", "lastname", "emailAddres", "password" ],
            where: [{ "id": _id }]
        });
    }

    async findAll() {
        const repository = this.usersRepository
        return await repository;
      } 

    async updateUser(user: User) {
        this.usersRepository.save(user)
    }

    async deleteUser(user: User) {
        this.usersRepository.delete(user);
    }
}