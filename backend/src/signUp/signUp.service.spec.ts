import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./signUp.service"

describe('UserService', () => {
let services = UserService;

beforeEach(async () => {
    const module : TestingModule = await Test.createTestingModule({
        providers: [UserService],
    }).compile();

    services = module.get<UserService>(UserService);
})

    it('should be defined', () =>{
        expect(services).toBeDefined();
    });
});