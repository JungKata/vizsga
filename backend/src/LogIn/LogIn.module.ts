import { Module } from "@nestjs/common";
import { LogInProfile } from "./LogIn.controller";
import { ProfileService } from "./LogIn.service";

@Module({
    //imports: [TypeOrmModule.forFeature([User])],
    providers: [ProfileService],
    controllers: [LogInProfile],
  })
  
  export class ProfileModule { }