import { Controller, Get, Post, Param, Req, Body } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from 'src/interfaces/question.interface';

@Controller()
export class QuestionController {
    constructor(private readonly questionService: QuestionService) { }

    @Get('/questions')
    findAll(): Promise<Question[]> {
        return this.questionService.findAll();
    }

    @Post('/question')
    addOne(@Body() questionDTO): Promise<boolean> {
        return this.questionService.addOne(questionDTO);
    }
}
