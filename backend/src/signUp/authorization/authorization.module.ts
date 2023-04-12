import { Module } from "@nestjs/common";
import { AuthorizationController } from "./authorization.controller";
import { AppController } from "src/app.controller";
import { AuthorizationService } from "./authorization.service";
import { AppService } from "src/app.service";
import TokenStrategy from "./token.strategy";




@Module({
    controllers: [AuthorizationController, AppController],
    providers: [AuthorizationService, AppService, TokenStrategy]
})
export class AuthModule{}