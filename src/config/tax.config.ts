import { IsString } from 'class-validator';
import { validateConfig } from '@common/validators';
import { registerAs } from '@nestjs/config';
import { TaxConfig } from '@config/config.type';

class EnvironmentVariablesValidator {
  @IsString()
  TAX_URL: string;
}

export default registerAs<TaxConfig>('tax', () => {
  validateConfig(process.env, EnvironmentVariablesValidator);

  return {
    url: process.env.TAX_URL,
  };
});
