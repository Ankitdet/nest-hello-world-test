import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './crud-ops/crud.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConfig } from '../db-config';
import { User } from './user/entity/user.entity';

@Module({
  imports: [
    CrudModule,
    UserModule,
    TypeOrmModule.forRoot({
      ssl: true,
      type: "postgres",
      host: DBConfig.POSTGRES_HOST,
      port: 5432,
      username: DBConfig.POSTGRES_USER,
      password: DBConfig.POSTGRES_PASSWORD,
      database: DBConfig.POSTGRES_DATABASE,
      synchronize: true,
      logging: true,
      subscribers: [],
      migrations: [],
      entities: [User]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
