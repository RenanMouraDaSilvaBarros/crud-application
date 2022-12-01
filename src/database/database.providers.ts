import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.MySQL_HOST,
        port: +process.env.MySQL_PORT,
        username: process.env.MySQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MySQL_DATABASE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
