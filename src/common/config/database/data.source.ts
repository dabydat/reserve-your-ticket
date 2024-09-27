import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const createDataSourceOptions = (configService: ConfigService, prefix: string): DataSourceOptions => ({
    type: 'postgres',
    host: configService.get<string>(`DB_HOST_${prefix}`),
    port: configService.get<number>(`DB_PORT_${prefix}`),
    username: configService.get<string>(`DB_USERNAME_${prefix}`),
    password: configService.get<string>(`DB_PASSWORD_${prefix}`),
    database: configService.get<string>(`DB_NAME_DATABASE_${prefix}`),
    entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    synchronize: false,
    migrationsRun: false,
    logging: true,
    namingStrategy: new SnakeNamingStrategy(),
});

export const createDataSource = (options: DataSourceOptions): DataSource => new DataSource(options);