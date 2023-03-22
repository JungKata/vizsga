import { Injectable } from "@nestjs/common";
import { LogInCreate } from "./data_Dto/LogInCreate.dto";
import { LogInUpdate } from "./data_Dto/LogInUpdate.dto";

@Injectable()
export class ProfileService {
    [x: string]: any;
    create(logInCreate: LogInCreate){
        return 'profile creating'
    }

    findOne(id: number){
        return 'id-based profile search'
        //id alapú keresés
    }

    findAll(){
        return 'returns all profiles created so far'
        // az összes eddigi létrehozott profilt adja vissza
    }

    update(id: number, LogInUpdate: LogInUpdate){
        return 'modifies profile based on id search'
        // id keresés alapján módosítja a profilt
    }

    delete(id: number){
        return 'deletes the profile based on an id search'
        // id keresés alapján törli a profilt
    }
}