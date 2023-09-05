import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API - ELINTIJA')
    .setDescription('Intipaz')
    .setVersion('1.0')
    .addTag('Intipaz')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin:
      process.env.CORS_ORIGIN_URL != undefined
        ? process.env.CORS_ORIGIN_URL
        : '*',
  });
  app.disable('x-powered-by');
  app.use(helmet.frameguard({ action: 'deny' }));

  await app.listen(process.env.APP_PORT);
}
bootstrap();
