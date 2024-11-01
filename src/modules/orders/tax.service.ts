import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from '@config/config.type';
import { CreateOrderDto } from '@modules/orders/dto/create-order.dto';
import axios from 'axios';

@Injectable()
export class TaxService {
  /**
   * Constructs the TaxService.
   * @param configService - The service for accessing configuration values.
   */
  constructor(private configService: ConfigService<AllConfigType>) {}

  /**
   * Logs tax data by sending a POST request to the configured tax URL.
   * @param createOrderDto - The data transfer object containing order details.
   * @returns A promise that resolves when the tax data is logged.
   */
  async logTaxData(createOrderDto: CreateOrderDto) {
    try {
      const response = await axios.post(
        this.configService.get('tax.url', {
          infer: true,
        }),
        createOrderDto,
      );
      console.log(response);
    } catch (error) {
      console.error('Failed to log tax data:', error.message);
    }
  }
}