import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import UpdateDto from "./data_Dto/SignUp_update.dto";
import { User } from "./entity/signUp.entity";
import { UserService } from "./signUp.service";


@Controller('user')
export class UserController{
    module: any;

    constructor(private readonly service: UserService) { }

    @Get()
    findAll(){
        return this.service.findAll();
    }

    @Get(':id')
   findOne(@Param('id') id:string){
        return this.service.findOne(+id);
   }

   @Delete(':id')
    remove(@Param('id') id: string){
        return this.service.remove(+id);
    }

    @Patch()
    update(@Param('id') id: string, @Body() updateDto: UpdateDto){
        return this.service.update(+id, updateDto);
    }

    
   
   
   
}
   
   
   
   /*@Post()
    create(@Body() user: User) {
        return this.service.createUser(user);
    }

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param('') params) {
        return this.service.deleteUser(params.id);
    }*/
