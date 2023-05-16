import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Req, UseGuards } from "@nestjs/common";
import UpdateDto from "./data_Dto/SignUp_update.dto";
import { User } from "./entity/signUp.entity";
import { UserService } from "./signUp.service";
import { AuthGuard } from "@nestjs/passport";


@Controller('users')
export class UserController{
    module: any;

    constructor(private readonly service: UserService) { }

    //összes user 
    @Get()
    findAll(@Req() request: Request): Promise<User[]>{
        return this.service.findAll();
    }

    //id alapú keresés
    @Get(':id')
   findOne(@Param('id') id:number){
        return this.service.findOne(id);
   }

   //törlés id alapján
   @Delete(':id')
    remove(@Param('id') id: number){
        return this.service.remove(+id);
    }

    //modósítás id alapján
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateDto: UpdateDto){
        return this.service.update(+id, updateDto);

    }

    //lekérés
    @Get('logIn')
@UseGuards(AuthGuard('bearer'))
ownLogin(@Req() req) {
  const user: User = req.user;
  return {
    email: user.emailAddress
  };
}
   
}
   
