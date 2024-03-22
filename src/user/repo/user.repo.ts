import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../crud-ops/repo/base.repo';
import { User } from '../entity/user.entity';

@Injectable()
export class UserRepository extends BaseRepository<User> {
    constructor(@InjectRepository(User) userRepository: Repository<User>) {
        super(userRepository);
    }

    public findAllData() {
        this.findAll()
    }
}