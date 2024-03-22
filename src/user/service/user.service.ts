import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../crud-ops/crud-service';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService extends CrudService<User> {
    constructor(
        @InjectRepository(User) repository: Repository<User>) {
        super(repository);
    }
}