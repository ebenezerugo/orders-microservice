import { OrderResponseDto } from '@modules/orders/dto/order-response.dto';
import { Order } from '@modules/orders/entities/order.entity';

export class OrderMapper {
  static toDto(entity: Order): OrderResponseDto {
    const dto = new OrderResponseDto();
    dto.id = entity.id;
    dto.businessId = entity.businessId;
    dto.departmentId = entity.departmentId;
    dto.amount = entity.amount;
    dto.status = entity.status;
    dto.createdAt = entity.createdAt;
    return dto;
  }
}
