export class Parameters {
  static get port(): number {
    return Number(process.env.PORT);
  }

  static get dbConfig() {
    return {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    };
  }
}
