import { Base } from '@common/entities/base.entity';
import { PrimaryGeneratedColumn } from 'typeorm';

export class UuidPrimaryIdEntity extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
