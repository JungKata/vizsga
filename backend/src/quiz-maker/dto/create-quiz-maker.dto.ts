import { IsNotEmpty, IsString } from "class-validator";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CreateQuizMakerDto {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @IsNotEmpty()
    kerdes: string;

    @IsString()
    @IsNotEmpty()
    valasz_1: string;

    @IsString()
    @IsNotEmpty()
    valasz_2: string;

    @IsString()
    @IsNotEmpty()
    valasz_3: string;

    @IsString()
    @IsNotEmpty()
    valasz_4 : string;

    @IsString()
    @IsNotEmpty()
    tema: string;

    @IsString()
    @IsNotEmpty()
    helyes_valasz: string;
}
