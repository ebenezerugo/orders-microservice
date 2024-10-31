import { registerAs } from '@nestjs/config';
import { AppConfig } from './config.type';
import { validateConfig } from '@common/validators';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  Min,
} from 'class-validator';

enum Environment {
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production',
  TEST = 'test',
  PROVISION = 'provision',
  QA = 'qa',
  UAT = 'uat',
  DEMO = 'demo',
  LOCAL = 'local',
  DOCKER = 'docker',
  DOCKER_COMPOSE = 'docker-compose',
  KUBERNETES = 'kubernetes',
  OPENSHIFT = 'openshift',
  HEROKU = 'heroku',
  AWS = 'aws',
  AZURE = 'azure',
  GOOGLE_CLOUD = 'google-cloud',
  DIGITAL_OCEAN = 'digital-ocean',
  LINODE = 'linode',
  VULTR = 'vultr',
  OTHER = 'other',
}

class EnvironmentVariablesValidator {
  @IsEnum(Environment)
  @IsOptional()
  NODE_ENV: Environment;

  @IsString()
  NAME: string;

  @IsString()
  @IsOptional()
  DESCRIPTION: string;

  @IsString()
  @IsOptional()
  VERSION: string;

  @IsInt()
  @Min(0)
  @Max(65535)
  @IsOptional()
  PORT: number;

  @IsString()
  @IsOptional()
  KEY: string;

  @IsString()
  @IsOptional()
  WORKING_DIRECTORY: string;

  @IsUrl({ require_tld: false })
  @IsOptional()
  BACKEND_DOMAIN: string;

  @IsUrl({ require_tld: false })
  @IsOptional()
  DOMAIN: string;

  @IsString()
  @IsOptional()
  API_PREFIX: string;

  @IsString()
  @IsOptional()
  FALLBACK_LANGUAGE: string;

  @IsString()
  @IsOptional()
  HEADER_LANGUAGE: string;

  @IsString()
  @IsOptional()
  STORAGE_PATH: string;
}

export default registerAs<AppConfig>('app', () => {
  validateConfig(process.env, EnvironmentVariablesValidator);
  return {
    nodeEnv: process.env.NODE_ENV || Environment.DEVELOPMENT,
    name: process.env.NAME || 'app',
    description: process.env.DESCRIPTION || 'app',
    version: process.env.VERSION || '1.0',
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
    key: process.env.KEY || '',
    workingDirectory: process.env.WORKING_DIRECTORY || process.cwd(),
    backendDomain: process.env.BACKEND_DOMAIN ?? 'http://localhost',
    domain: process.env.DOMAIN || 'http://localhost',
    apiPrefix: process.env.API_PREFIX || 'api',
    fallbackLanguage: process.env.FALLBACK_LANGUAGE || 'en',
    headerLanguage: process.env.HEADER_LANGUAGE || 'x-custom-lang',
    storagePath: process.env.STORAGE_PATH || '/',
  };
});
