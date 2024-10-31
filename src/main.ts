import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { validationOptions } from '@common/validators';
import { SwaggerConfig } from '@config/swagger.config';
import { AllConfigType } from '@config/config.type';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService<AllConfigType>);

  app.enableShutdownHooks();
  app.setGlobalPrefix(configService.get('app.apiPrefix', { infer: true }), {
    exclude: ['/', '/health'],
  });

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.useGlobalPipes(new ValidationPipe(validationOptions));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  SwaggerConfig(app, configService.get('app.version', { infer: true }));

  await app.listen(configService.getOrThrow('app.port', { infer: true }));

  return configService.getOrThrow('app.port', { infer: true });
}

bootstrap().then((port: number) => {
  Logger.log(`Application running on port: ${port}`, 'Main');
});
