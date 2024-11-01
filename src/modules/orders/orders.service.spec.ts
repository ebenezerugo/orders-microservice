import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { getModelToken } from '@nestjs/mongoose';
import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { OrdersService } from './orders.service';
import { Order } from '@modules/orders/entities/order.entity';
import { OrderDocument } from '@modules/orders/schemas/order.schema';
import { TaxService } from '@modules/orders/tax.service';
import { CreateOrderDto } from '@modules/orders/dto/create-order.dto';
import { OrderMapper } from '@modules/orders/order.mapper';

const createOrderDto: CreateOrderDto = {
  businessId: '123e4567-e89b-12d3-a456-426614174000',
  departmentId: '123e4567-e89b-12d3-a456-426614174000',
  amount: 100,
  status: 'pending',
};

describe('OrdersService', () => {
  let service: OrdersService;
  let orderRepository: Repository<Order>;
  let orderModel: Model<OrderDocument>;
  let taxService: TaxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: getRepositoryToken(Order),
          useClass: Repository,
        },
        {
          provide: getModelToken('Order'),
          useValue: {
            create: jest.fn(),
            find: jest.fn(),
          },
        },
        {
          provide: TaxService,
          useValue: {
            logTaxData: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService) as OrdersService;
    orderRepository = module.get<Repository<Order>>(
      getRepositoryToken(Order),
    ) as Repository<Order>;
    orderModel = module.get<Model<OrderDocument>>(
      getModelToken('Order'),
    ) as Model<OrderDocument>;
    taxService = module.get<TaxService>(TaxService) as TaxService;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createOrder', () => {
    it('should create and save an order', async () => {
      const order = { ...createOrderDto, id: 1 } as Order;
      jest.spyOn(orderRepository, 'create').mockReturnValue(order as any);
      jest.spyOn(orderRepository, 'save').mockResolvedValue(order as any);
      jest.spyOn(orderModel, 'create').mockResolvedValue(order as any);
      jest.spyOn(taxService, 'logTaxData').mockResolvedValue(undefined);

      const result = await service.createOrder(createOrderDto);

      expect(orderRepository.create).toHaveBeenCalledWith(createOrderDto);
      expect(orderRepository.save).toHaveBeenCalledWith(order);
      expect(orderModel.create).toHaveBeenCalledWith(createOrderDto);
      expect(taxService.logTaxData).toHaveBeenCalledWith(createOrderDto);
      expect(result).toEqual(OrderMapper.toDto(order));
    });

    it('should throw an error if order creation fails', async () => {
      jest.spyOn(orderRepository, 'create').mockReturnValue(null);
      await expect(service.createOrder(createOrderDto)).rejects.toThrow();
    });

    it('should throw an error if order saving fails', async () => {
      const order = { ...createOrderDto, id: 1 } as Order;
      jest.spyOn(orderRepository, 'create').mockReturnValue(order as any);
      jest
        .spyOn(orderRepository, 'save')
        .mockRejectedValue(new Error('Save failed'));
      await expect(service.createOrder(createOrderDto)).rejects.toThrow(
        'Save failed',
      );
    });

    it('should throw an error if order model creation fails', async () => {
      const order = { ...createOrderDto, id: 1 } as Order;
      jest.spyOn(orderRepository, 'create').mockReturnValue(order as any);
      jest.spyOn(orderRepository, 'save').mockResolvedValue(order as any);
      jest
        .spyOn(orderModel, 'create')
        .mockRejectedValue(new Error('Model creation failed'));
      await expect(service.createOrder(createOrderDto)).rejects.toThrow(
        'Model creation failed',
      );
    });
  });

  describe('getOrderDetails', () => {
    it('should return order details', async () => {
      const businessId = '123e4567-e89b-12d3-a456-426614174000';
      jest.spyOn(orderRepository, 'count').mockResolvedValue(5);
      jest.spyOn(orderRepository, 'createQueryBuilder').mockReturnValue({
        select: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        getRawOne: jest.fn().mockResolvedValue({ sum: 500 }),
      } as any);

      const result = await service.getOrderDetails(businessId);

      expect(orderRepository.count).toHaveBeenCalledWith({
        where: { businessId },
      });
      expect(orderRepository.createQueryBuilder).toHaveBeenCalled();
      expect(result).toEqual({ totalOrders: 5, totalAmount: { sum: 500 } });
    });

    it('should return zero orders and amount if no orders exist', async () => {
      const businessId = '123e4567-e89b-12d3-a456-426614174000';
      jest.spyOn(orderRepository, 'count').mockResolvedValue(0);
      jest.spyOn(orderRepository, 'createQueryBuilder').mockReturnValue({
        select: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        getRawOne: jest.fn().mockResolvedValue({ sum: 0 }),
      } as any);

      const result = await service.getOrderDetails(businessId);

      expect(result).toEqual({ totalOrders: 0, totalAmount: { sum: 0 } });
    });
  });

  describe('calculateCreditScore', () => {
    it('should calculate credit score', async () => {
      const businessId = '123e4567-e89b-12d3-a456-426614174000';
      const orders = Array(10).fill({ businessId });
      jest.spyOn(orderModel, 'find').mockReturnValue({
        exec: jest.fn().mockResolvedValue(orders),
      } as any);

      const result = await service.calculateCreditScore(businessId);

      expect(orderModel.find).toHaveBeenCalledWith({ businessId });
      expect(result).toEqual({ score: 100 });
    });

    it('should return a score of 0 if no orders exist', async () => {
      const businessId = '123e4567-e89b-12d3-a456-426614174000';
      jest.spyOn(orderModel, 'find').mockReturnValue({
        exec: jest.fn().mockResolvedValue([]),
      } as any);

      const result = await service.calculateCreditScore(businessId);

      expect(result).toEqual({ score: 0 });
    });

    it('should return a score of 100 if more than 10 orders exist', async () => {
      const businessId = '123e4567-e89b-12d3-a456-426614174000';
      const orders = Array(15).fill({ businessId });
      jest.spyOn(orderModel, 'find').mockReturnValue({
        exec: jest.fn().mockResolvedValue(orders),
      } as any);

      const result = await service.calculateCreditScore(businessId);

      expect(result).toEqual({ score: 100 });
    });
  });
});
