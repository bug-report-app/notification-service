import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${process.env.RABBITMQ_HOST}:5672`],
      queue: 'notification_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  app.startAllMicroservices();
  await app.listen(process.env.PORT_HTTP || 3002);
}
bootstrap();
