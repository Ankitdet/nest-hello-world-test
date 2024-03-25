import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { UserService } from './service/user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('/')
    async create(@Body() data: CreateUserDto): Promise<unknown> {
        return await this.userService.create(data);
    }

    @Get('/')
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: number): Promise<User> {
        return this.userService.findById(Number(String(id)));
    }

    /* @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() data: Partial<User>,
    ): Promise<void> {
        return this.userService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.userService.delete(id);
    } */
}