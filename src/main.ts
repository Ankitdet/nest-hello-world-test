import "reflect-metadata"
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
// https://nest-hello-world-test-9tw5ezqjy-apdetrojas-projects.vercel.app/users