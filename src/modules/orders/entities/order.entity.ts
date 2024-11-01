import { Column, Entity } from 'typeorm';
import { UuidPrimaryIdEntity } from '@common/entities';

@Entity({ schema: 'sale', name: 'orders' })
export class Order extends UuidPrimaryIdEntity {
  @Column({
    name: 'business_id',
    type: 'uuid',
    nullable: false,
  })
  businessId: string;

  @Column({
    name: 'customer_id',
    type: 'uuid',
    nullable: false,
  })
  departmentId: string;

  @Column({
    name: 'amount',
    type: 'decimal',
  })
  amount: number;

  @Column({
    name: 'status',
    type: 'enum',
    enum: ['pending', 'completed', 'cancelled'],
    default: 'pending',
  })
  status: string;
}
