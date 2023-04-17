import { Module } from "@nestjs/common";
import { AuthorizationController } from "./authorization.controller";
import { AppController } from "src/app.controller";
import { AuthorizationService } from "./authorization.service";
import { AppService } from "src/app.service";
import TokenStrategy from "./token.strategy";
import { UserModule } from "../signUp.module";
import { UserService } from "../signUp.service";
import Token from "./token.entity";
import { UserController } from "../signUp.controller";




@Module({


    
    controllers: [AuthorizationController],
    providers: [AuthorizationService, TokenStrategy],
   
})

export class AuthModule{}