import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

/**
 * Creates and returns the data source options for a PostgreSQL database.
 *
 * @param {ConfigService} configService - The configuration service to retrieve database settings.
 * @param {string} prefix - The prefix to use for environment variables.
 * @returns {DataSourceOptions} The data source options configured for the PostgreSQL database.
 */
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
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),
});

/**
 * Creates a new DataSource instance with the provided options.
 *
 * @param options - The configuration options for the DataSource.
 * @returns A new DataSource instance.
 */
export const createDataSource = (options: DataSourceOptions): DataSource => new DataSource(options);