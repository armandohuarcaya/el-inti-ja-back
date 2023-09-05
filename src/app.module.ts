import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntipazModule } from './intipaz/intipaz.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGODB_WEB_USERNAME}:${process.env.MONGODB_WEB_PASSWORD}@${process.env.MONGODB_WEB_HOST}:${process.env.MONGODB_WEB_PORT}/${process.env.MONGODB_WEB_DATABASE}?authSource=admin&directConnection=true`,
    ),
    IntipazModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
