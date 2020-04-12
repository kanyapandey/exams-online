import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from 'src/interfaces/question.interface';
import { QuestionDTO } from 'src/dto/question.dto';

@Injectable()
export class QuestionService {
  constructor(@InjectModel('Question') private readonly question: Model<Question>) {}

  async create(questionDTO: QuestionDTO): Promise<Question> {
    const createdCat = new this.question(questionDTO);
    return createdCat.save();
  }

  async findAll(): Promise<Question[]> {
    return this.question.find().exec();
  }

  async addOne(quest: Question): Promise<boolean>{

    const question = new this.question(quest);
      return question.save(question);


  }
}