import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User } from "./signUp.entity";
import { UserService } from "./signUp.service";


@Controller('user')
export class UserController{

    constructor(private service: UserService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Post()
    create(@Body() user: User) {
        return this.service.createUser(user);
    }

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}