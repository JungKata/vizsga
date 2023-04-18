import { Test, TestingModule } from '@nestjs/testing';
import { QuizMakerController } from './quiz-maker.controller';
import { QuizMakerService } from './quiz-maker.service';

describe('QuizMakerController', () => {
  let controller: QuizMakerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizMakerController],
      providers: [QuizMakerService],
    }).compile();

    controller = module.get<QuizMakerController>(QuizMakerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
