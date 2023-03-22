import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { LogInCreate } from "./data_Dto/LogInCreate.dto";
import { LogInUpdate } from "./data_Dto/LogInUpdate.dto";
import { ProfileService } from "./LogIn.service";

@Controller('loginProfile')
export class LogInProfile{
    constructor (private readonly profileService: ProfileService){}

    @Post()
        create(@Body() logInCreate : LogInCreate){
            return this.profileService.create(logInCreate)
            //Létrehoz egy profilt és fel postolja
        }

    @Get()
    findAll(){
        return this.profileService.findAll();
        // az összes profilt lekéri
    }

    @Get()
    findOne(id: number){
        return this.profileService.findOne(+id);
        // id keresés alapján kéri le a profilt
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.profileService.remove(+id);
        // id keresés alapján törli a profilt
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() logInupdate: LogInUpdate){
        return this.profileService.update(+id, logInupdate);
    }
}