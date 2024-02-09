import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationModule } from './modules/notification.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@projects.ij6r7fc.mongodb.net/${process.env.MONGODB_DATABASE}`,
    ),
    NotificationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
