import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacesModule } from './places/places.module';
import { ArticlesModule } from './articles/articles.module';
import { ConfigModule } from '@nestjs/config';
import { ExamplesModule } from './examples/examples.module';
@Module({
  imports: [PlacesModule, ArticlesModule, ConfigModule.forRoot(), ExamplesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
