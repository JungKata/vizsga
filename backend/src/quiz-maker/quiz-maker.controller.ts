import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuizMakerService } from './quiz-maker.service';
import { CreateQuizMakerDto } from './dto/create-quiz-maker.dto';
import { UpdateQuizMakerDto } from './dto/update-quiz-maker.dto';
import { DataSource } from 'typeorm';
import { quizMaker } from './entities/quiz-maker.entity';

@Controller('quiz-maker')
export class QuizMakerController {
  
  constructor(private readonly quizMakerService: QuizMakerService,
    private dataSource: DataSource,
    ) {}

  @Post('newQuestion')
  async newQuestion(@Body() questionData: CreateQuizMakerDto){
  const questionRepository = this.dataSource.getRepository(quizMaker)
  
    try{
      const questionId = questionData.id || '';
      const saveQuestion = Object.assign(new quizMaker(), questionData);
      saveQuestion.id == questionId;
      await questionRepository.save(saveQuestion);
      console.log(saveQuestion);
    }catch(error){
      console.error('Error saving question to database', error.message);
    }
}


  @Get('allQuestion')
  findAll() {
    return this.quizMakerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizMakerService.findOne(+id);
  }
  @Patch()
  update(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuizMakerDto){
    return this.quizMakerService.updateQuestion(+id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizMakerService.remove(+id);
  }
}
