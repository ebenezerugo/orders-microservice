export type AppConfig = {
  nodeEnv: string;
  name: string;
  description: string;
  version: string;
  port: number;
  key: string;
  workingDirectory: string;
  backendDomain: string;
  domain: string;
  apiPrefix: string;
  fallbackLanguage: string;
  headerLanguage: string;
  storagePath: string;
};

export type DatabaseConfig = {
  url?: string;
  type?: string;
  host?: string;
  port?: number;
  password?: string;
  name?: string;
  username?: string;
  synchronize?: boolean;
  maxConnections: number;
  sslEnabled?: boolean;
  rejectUnauthorized?: boolean;
  ca?: string;
  key?: string;
  cert?: string;
};

export type AuthConfig = {
  secret: string;
  tokenType: string;
  accessTokenExpiresIn: string;
  refreshTokenExpiresIn: string;
  callbackUrl: string;
};

export type MailConfig = {
  port: number;
  host?: string;
  user?: string;
  password?: string;
  defaultEmail?: string;
  defaultName?: string;
  ignoreTLS: boolean;
  secure: boolean;
  requireTLS: boolean;
};

export type MongoConfig = {
  url: string;
};

export type AllConfigType = {
  app: AppConfig;
  database: DatabaseConfig;
  auth: AuthConfig;
  mail: MailConfig;
  mongo: MongoConfig;
};
