declare namespace NodeJS {
  export interface ProcessEnv {
    APP_ENV: 'production' | 'development' | 'preview';
    SECRET_WEBHOOK_KEY: string;
  }
}
