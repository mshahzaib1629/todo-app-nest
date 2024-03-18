import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { PermissionModel } from 'src/models/permission.model';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(PermissionModel)
    private permissionModel: typeof PermissionModel,
  ) {}
  async create(createUserDto: CreateUserDto) {
    await this.permissionModel.create({
      name: 'Test',
    });
    return 'This action adds a new user';
  }

  findAll() {
    console.log('hello findAll');
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
