import { Module } from '@nestjs/common';
import { QuizMakerService } from './quiz-maker.service';
import { QuizMakerController } from './quiz-maker.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { quizMaker } from './entities/quiz-maker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([quizMaker])],
  controllers: [QuizMakerController],
  providers: [QuizMakerService]
})
export class QuizMakerModule {}
