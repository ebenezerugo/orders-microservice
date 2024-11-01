import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSchemaForSales1730363889037 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createSchema('sale', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropSchema('sale', true);
  }
}
