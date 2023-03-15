import {
  Controller,
  Get,
  Render,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';


@Controller()
export class AppController {
  [x: string]: any;
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}
}


 /* @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }
}*/
