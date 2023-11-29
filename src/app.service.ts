import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('TESTANDO');
    return 'Hello World Notification!';
  }
}
