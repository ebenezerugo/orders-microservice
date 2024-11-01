import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { OrderDocument } from '@modules/orders/schemas/order.schema';
import { Order } from '@modules/orders/entities/order.entity';
import { CreateOrderDto } from '@modules/orders/dto/create-order.dto';
import { OrderMapper } from '@modules/orders/order.mapper';
import { TaxService } from '@modules/orders/tax.service';

@Injectable()
export class OrdersService {
  private readonly logger = new Logger(OrdersService.name);

  /**
   * Constructs the OrdersService.
   * @param orderRepository - The repository for Order entities.
   * @param orderModel - The Mongoose model for Order documents.
   * @param taxService - The service for handling tax-related operations.
   */
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectModel('Order') private orderModel: Model<OrderDocument>,
    private taxService: TaxService,
  ) {}

  /**
   * Creates a new order.
   * @param createOrderDto - The data transfer object containing order details.
   * @returns The created order as a DTO.
   */
  async createOrder(createOrderDto: CreateOrderDto) {
    const orderEntity = this.orderRepository.create(createOrderDto);
    const order = await this.orderRepository.save(orderEntity);
    await this.orderModel.create(createOrderDto);
    this.taxService
      .logTaxData(createOrderDto)
      .then((response) => {
        this.logger.log('Tax data logged', response);
      })
      .catch((error) => {
        this.logger.error('Error logging tax data', error);
      });
    return OrderMapper.toDto(order);
  }

  /**
   * Retrieves order details for a specific business.
   * @param businessId - The ID of the business.
   * @returns An object containing the total number of orders and the total amount.
   */
  async getOrderDetails(businessId: string) {
    const totalOrders = await this.orderRepository.count({
      where: { businessId },
    });
    const totalAmount = await this.orderRepository
      .createQueryBuilder()
      .select('SUM(amount)', 'sum')
      .where('business_id = :businessId', { businessId })
      .getRawOne();

    return { totalOrders, totalAmount };
  }

  /**
   * Calculates the credit score for a specific business.
   * @param businessId - The ID of the business.
   * @returns An object containing the credit score.
   */
  async calculateCreditScore(businessId: string) {
    const orders = await this.orderModel.find({ businessId }).exec();
    return { score: Math.min(100, orders.length * 10) };
  }
}
