import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createDataSource, createDataSourceOptions } from './data.source';

@Module({})
export class DatabaseModule {
    static forRoot(): DynamicModule {
        return {
            module: DatabaseModule,
            imports: [
                TypeOrmModule.forRootAsync({
                    imports: [ConfigModule],
                    useFactory: async (configService: ConfigService) => ({
                        ...createDataSourceOptions(configService, 'DEFAULT'),
                        autoLoadEntities: true,
                    }),
                    inject: [ConfigService],
                }),
                // TypeOrmModule.forRootAsync({
                //     name: 'second',
                //     imports: [ConfigModule],
                //     useFactory: async (configService: ConfigService) => ({
                //         ...createDataSourceOptions(configService, 'SECOND'),
                //         autoLoadEntities: true,
                //     }),
                //     inject: [ConfigService],
                // }),
            ]
        };
    }
}