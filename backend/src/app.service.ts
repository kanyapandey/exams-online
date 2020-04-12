import { Injectable } from '@nestjs/common';
import { json } from 'express';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBhaloo(): object{
    return  {test:'hello'}
  }
}
