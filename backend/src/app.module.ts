import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionModule } from './modules/questions/question.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://root:example@localhost:27017'), QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
