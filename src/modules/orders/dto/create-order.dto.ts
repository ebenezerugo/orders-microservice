import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class CreateOrderDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'The ID of the business that created the order',
  })
  @IsUUID()
  @IsNotEmpty()
  businessId: string;

  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'The ID of the department that created the order',
  })
  @IsUUID()
  @IsNotEmpty()
  departmentId: string;

  @ApiProperty({
    example: 100.0,
    description: 'The amount of the order',
  })
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty({
    example: 'pending',
    description: 'The status of the order',
  })
  @IsNotEmpty()
  @IsString()
  status: string;
}
