import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { LoggingInterceptor } from "./common/services/logger/interceptors/logging.interceptor";
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";
import { CustomLogger } from "./common/services/logger/custom.logger";
import { HttpExceptionFilter } from "./common/services/exceptions-filter/http-exception.filter";
import { DatabaseModule } from "./common/config/database/database.module";
import { UsersModule } from "./modules/security/users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule.forRoot(),
    UsersModule
  ],
  controllers: [],
  providers: [
    CustomLogger,
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    { provide: APP_FILTER, useClass: HttpExceptionFilter }
  ],
  exports: [CustomLogger]
})
export class AppModule { }
