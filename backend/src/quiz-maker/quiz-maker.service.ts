import { Injectable } from '@nestjs/common';
import { CreateQuizMakerDto } from './dto/create-quiz-maker.dto';
import { UpdateQuizMakerDto } from './dto/update-quiz-maker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { quizMaker } from './entities/quiz-maker.entity';
import { Repository } from 'typeorm';

@Injectable()

export class QuizMakerService {
  [x: string]: any;
  
  constructor(@InjectRepository(quizMaker) private  questionRepository: Repository<quizMaker>) { }

async getQuestion(question: quizMaker): Promise<quizMaker[]> {
    return await this.questionRepository.find();
}

async getUser(_id: number): Promise<quizMaker[]> {
  return await this.questionRepository.find({
      select: ["kerdes", "tema", "valasz_1", "valasz_2", "valasz_3", "valasz_4", "helyes_valasz" ],
      where: [{ "id": _id }]
  });
}

  create(createQuizMakerDto: CreateQuizMakerDto) {
    return 'This action adds a new quizMaker';
  }

  async findAll() {
    const repository = this.questionRepository
        return await repository;
   // return `This action returns all quizMaker`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quizMaker`;
  }

  async updateQuestion(question: quizMaker) {
    this.questionRepository.save(question)
}

  remove(id: number) {
    return `This action removes a #${id} quizMaker`;
  }
}
