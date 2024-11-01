import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Order {
  @Prop({ required: true })
  businessId: string;

  @Prop({ required: true })
  departmentId: string;

  @Prop({ required: true, type: Number })
  amount: number;

  @Prop({ required: true })
  status: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export type OrderDocument = Order & Document;
export const OrderSchema = SchemaFactory.createForClass(Order);
