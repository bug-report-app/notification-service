import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../database/repositories/notification.repository';

@Injectable()
export class NotificationService {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}

  async sendNotification(data: any): Promise<any> {
    const result = await this.notificationRepository.sendNotification(data);
    return result;
  }
}
