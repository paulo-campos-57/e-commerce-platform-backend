import {
  MiddlewareConsumer,
  Module,
  NestMiddleware,
  NestModule,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './common/middlewares/logger';
import { RecommendationModule } from './modules/recommendation/recommendation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '../.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'ec-platform.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    RecommendationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
