import { DeepPartial, FindManyOptions, FindOneOptions, FindOptionsWhere, ObjectId } from 'typeorm';
import { BaseEntity } from '../entities/base.entity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export interface IRepository<T extends BaseEntity> {
    findAll(options?: FindManyOptions<T>): Promise<T> | Promise<T[]>;
    findById(options: FindOneOptions<T>): Promise<T>;
    create(data: DeepPartial<T>[]): Promise<T[]>;
    update(criteria: string | string[] | number | number[] | Date | Date[] | ObjectId | ObjectId[] | FindOptionsWhere<T>, partialEntity: QueryDeepPartialEntity<T>): Promise<void>
    delete(criteria: string | string[] | number | number[] | Date | Date[] | ObjectId | ObjectId[] | FindOptionsWhere<T>): Promise<void>
}