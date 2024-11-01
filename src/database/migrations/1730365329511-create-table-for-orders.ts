import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableForOrders1730365329511 implements MigrationInterface {
  name = 'CreateTableForOrders1730365329511';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "sale"."orders_status_enum" AS ENUM('pending', 'completed', 'cancelled')`,
    );
    await queryRunner.query(
      `CREATE TABLE "sale"."orders" ("created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "business_id" uuid NOT NULL, "customer_id" uuid NOT NULL, "amount" numeric NOT NULL, "status" "sale"."orders_status_enum" NOT NULL DEFAULT 'pending', CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "sale"."orders"`);
    await queryRunner.query(`DROP TYPE "sale"."orders_status_enum"`);
  }
}
