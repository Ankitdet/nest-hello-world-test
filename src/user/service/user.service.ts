import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { UserRepository } from '../repo/user.repo';

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) {
    }

    public async findAll(): Promise<User[]> {
        console.log("Modified findAll method is called");
        return this.userRepository.findAll();
    }

    public async findById(id: any): Promise<User> {
        console.log("Modified findAll method is called");
        return await this.userRepository.findById(id)
    }

    public async create(data: any): Promise<User[]> {
        console.log("Modified findAll method is called");
        return this.userRepository.create(data);
    }
}
