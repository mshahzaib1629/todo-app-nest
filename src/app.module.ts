import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TodosModule } from './modules/todos/todos.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeConfig } from './utils/sequelize.config';
@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: sequelizeConfig,
    }),
    UsersModule,
    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
