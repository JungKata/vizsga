import { Injectable } from '@nestjs/common';
import { CreateQuizMakerDto } from './dto/create-quiz-maker.dto';
import { UpdateQuizMakerDto } from './dto/update-quiz-maker.dto';

@Injectable()
export class QuizMakerService {
  create(createQuizMakerDto: CreateQuizMakerDto) {
    return 'This action adds a new quizMaker';
  }

  findAll() {
    return `This action returns all quizMaker`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quizMaker`;
  }

  update(id: number, updateQuizMakerDto: UpdateQuizMakerDto) {
    return `This action updates a #${id} quizMaker`;
  }

  remove(id: number) {
    return `This action removes a #${id} quizMaker`;
  }
}
