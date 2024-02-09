import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NotificationDocument = HydratedDocument<Notification>;

@Schema()
export class Notification {
  @Prop()
  account_id: string;

  @Prop()
  name: string;

  @Prop()
  email: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
