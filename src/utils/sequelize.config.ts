import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { PermissionModel } from 'src/models/permission.model';

export function sequelizeConfig(): SequelizeModuleOptions {
  return {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    models: [PermissionModel],
  };
}
