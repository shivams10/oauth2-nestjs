import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api')
  const PORT: number | string = process.env.PORT || 3001;
  await app.listen(PORT, () => {
    console.log(
      `Application is running on port ${PORT}. Url: http://localhost:${PORT}`,
    ); 
  });
}
bootstrap();
