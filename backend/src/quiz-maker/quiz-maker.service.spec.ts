import { Test, TestingModule } from '@nestjs/testing';
import { QuizMakerService } from './quiz-maker.service';

describe('QuizMakerService', () => {
  let service: QuizMakerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizMakerService],
    }).compile();

    service = module.get<QuizMakerService>(QuizMakerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
