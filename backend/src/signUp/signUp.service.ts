import { Injectable } from "@nestjs/common";
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

    async deleteUser(id: number): Promise<void> {
        try {
          const user = await this.usersRepository.findOne(id);
          if (!user) {
            throw new Error(`User with ID ${id} not found`);
          }
          await this.usersRepository.remove(user);
        } catch (error) {
          throw new Error(`Could not delete user: ${error.message}`);
        }
      }
      
}