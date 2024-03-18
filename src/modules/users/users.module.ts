import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PermissionModel } from 'src/models/permission.model';

@Module({
  imports: [SequelizeModule.forFeature([PermissionModel])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
