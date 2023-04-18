import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuizMakerService } from './quiz-maker.service';
import { CreateQuizMakerDto } from './dto/create-quiz-maker.dto';
import { UpdateQuizMakerDto } from './dto/update-quiz-maker.dto';

@Controller('quiz-maker')
export class QuizMakerController {
  constructor(private readonly quizMakerService: QuizMakerService) {}

  @Post()
  create(@Body() createQuizMakerDto: CreateQuizMakerDto) {
    return this.quizMakerService.create(createQuizMakerDto);
  }

  @Get()
  findAll() {
    return this.quizMakerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizMakerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuizMakerDto: UpdateQuizMakerDto) {
    return this.quizMakerService.update(+id, updateQuizMakerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizMakerService.remove(+id);
  }
}
