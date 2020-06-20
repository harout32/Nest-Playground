import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { GlobalModule } from './global/global.module';

@Module({
  imports: [GlobalModule],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('posts');
  }
}
