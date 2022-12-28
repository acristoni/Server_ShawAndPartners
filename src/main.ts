import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GitHubModule } from './github.module';

async function bootstrap() {
  const app = await NestFactory.create(GitHubModule);

  const config = new DocumentBuilder()
    .setTitle('API GitHub - Shaw and Partner Project Challenge')
    .setDescription(
      'API documentation of the project challenge carried out for the FullStack developer vacancy at Shaw and Partner, here you can understand how each end point works, with examples, DTOs schematics and you can interact directly with the API through this tool, thanks for the opportunity to be able to show my potential to you, I hope this is the beginning of a good partnership.',
    )
    .setVersion('1.0')
    .addTag('List of users, user detail and user repositories')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
