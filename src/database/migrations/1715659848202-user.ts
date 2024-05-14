import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class User1715659848202 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'username',
            type: 'varchar(255)',
            isNullable: true,
          },
          {
            name: 'password',
            type: 'varchar(255)',
            isNullable: true,
          },
          {
            name: 'createAt',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'updateAt',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('gmail_accounts');
  }
}
