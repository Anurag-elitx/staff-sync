import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './upload/upload.module';
import { User } from './users/entities/user.entity';
import { Employee } from './employees/entities/employee.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USER', 'root'),
        password: configService.get<string>('DB_PASSWORD', 'rootpassword'),
        database: configService.get<string>('DB_NAME', 'staff_sync_db'),
        models: [User, Employee],
        autoLoadModels: true,
        synchronize: true, // Not recommended for production, but okay for this assignment
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    EmployeesModule,
    AuthModule,
    UploadModule,
  ],
})
export class AppModule {}
