import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '@modules/orders/entities/order.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from '@modules/orders/schemas/order.schema';
import { TaxService } from '@modules/orders/tax.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService, TaxService],
})
export class OrdersModule {}
