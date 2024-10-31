import appConfig from '@config/app.config';
import databaseConfig from '@config/database.config';
import { SwaggerConfig } from '@config/swagger.config';
import mongoConfig from '@config/mongo.config';

export * from './config.type';
export { appConfig, databaseConfig, mongoConfig, SwaggerConfig };
