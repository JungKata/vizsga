import { PartialType } from '@nestjs/mapped-types';
import { CreateQuizMakerDto } from './create-quiz-maker.dto';

export class UpdateQuizMakerDto extends PartialType(CreateQuizMakerDto) {
    
}
