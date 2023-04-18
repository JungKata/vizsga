import { Module } from '@nestjs/common';
import { QuizMakerService } from './quiz-maker.service';
import { QuizMakerController } from './quiz-maker.controller';

@Module({
  controllers: [QuizMakerController],
  providers: [QuizMakerService]
})
export class QuizMakerModule {}
