import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Dentiva API')
    .setDescription('server side application for dentiva apps')
    .setVersion('1.0')
    .addTag('API places')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apiDocs', app, document);

  await app.listen(8000);
}
bootstrap();
