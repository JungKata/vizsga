import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-http-bearer';
import { AuthorizationService } from "./authorization.service";



@Injectable()
export default class TokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh-token'){
    constructor(private authorizationService: AuthorizationService){
        super();
    }

    async validate(token: string){
        var user = this.authorizationService.findUserToken(token)
        if(!user == null){
            throw new UnauthorizedException;
            //ha nem található felhasználó dobjon hibát
        }
        return user;
    }
}