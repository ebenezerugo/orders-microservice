import { IsString } from 'class-validator';
import { registerAs } from '@nestjs/config';
import { validateConfig } from '@common/validators';
import { MongoConfig } from '@config/config.type';

class EnvironmentVariablesValidator {
  @IsString()
  MONGO_URL: string;
}

export default registerAs<MongoConfig>('mongo', () => {
  validateConfig(process.env, EnvironmentVariablesValidator);

  return {
    type: 'mongodb',
    url: process.env.MONGO_URL,
  };
});
