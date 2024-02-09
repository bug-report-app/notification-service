import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { NotificationService } from '../services/notification.service';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @EventPattern('testando')
  sendNotification(data: any): any {
    const result = this.notificationService.sendNotification(data);
    return result;
  }
}
