import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ValidationPipe,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiConflictResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { ApiGlobalResponse } from '@common/decorators';
import { OrderResponseDto } from '@modules/orders/dto/order-response.dto';

@ApiTags('Orders')
@Controller({
  path: 'orders',
  version: '1',
})
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiOperation({ description: 'Create order' })
  @ApiGlobalResponse(OrderResponseDto)
  @ApiConflictResponse({ description: 'Order already exist' })
  @Post()
  createOrder(@Body(ValidationPipe) createOrderDto: CreateOrderDto) {
    return this.ordersService.createOrder(createOrderDto);
  }

  @ApiOperation({ description: 'Get order details' })
  @ApiOkResponse()
  @Get('business/:businessId/details')
  getOrderDetails(@Param('businessId') businessId: string) {
    return this.ordersService.getOrderDetails(businessId);
  }

  @ApiOperation({ description: 'Calculate credit score' })
  @ApiOkResponse()
  @Get('business/:businessId/credit-score')
  calculateCreditScore(@Param('businessId') businessId: string) {
    return this.ordersService.calculateCreditScore(businessId);
  }
}
