import { Test, TestingModule } from "@nestjs/testing";
import { ProfileService } from "./LogIn.service"



describe('ProfilesService', () => {
    let services = ProfileService;

    beforeEach(async () => {
        const module : TestingModule = await Test.createTestingModule({
            providers: [ProfileService],
        }).compile();

        services = module.get<ProfileService>(ProfileService);
    });

    it('should be defined', () =>{
        expect(services).toBeDefined();
    });
})
