import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConfig } from './common-module/config/db-config';
import { AllEntities } from './export-entity';
import { AllModules } from './export-module';

@Module({
  imports: [
    ...AllModules,
    TypeOrmModule.forRoot({
      ssl: true,
      type: 'postgres',
      host: DBConfig.POSTGRES_HOST,
      port: 5432,
      username: DBConfig.POSTGRES_USER,
      password: DBConfig.POSTGRES_PASSWORD,
      database: DBConfig.POSTGRES_DATABASE,
      synchronize: true,
      logging: true,
      subscribers: [],
      migrations: [],
      entities: AllEntities
    })
  ],
  controllers: [],
  providers: [],
})
export class MainModule { }
