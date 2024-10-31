import { PrimaryGeneratedColumn } from 'typeorm';
import { Base } from '@common/entities/base.entity';

export class IntegerPrimaryIdEntity extends Base {
  @PrimaryGeneratedColumn({ name: 'id', type: 'integer' })
  id: number;
}
