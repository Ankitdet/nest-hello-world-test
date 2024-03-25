import { DeepPartial, FindManyOptions, FindOneOptions, FindOptionsWhere, ObjectId, Repository } from "typeorm";
import { BaseEntity } from "./entities/base.entity";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { IRepository } from "./interface/crud.interface";

export abstract class BaseCrudService<T extends BaseEntity> implements IRepository<T> {
    constructor(public readonly repository: Repository<T>) { }

    public async findAll(options?: FindManyOptions<T>): Promise<T[]> {
        try {
            return await this.repository.find(options);
        } catch (error) {
            throw new Error(`Error occurred while finding entities: ${options} ${error.message}`);
        }
    }

    public async findById(options: FindOneOptions<T>): Promise<T> {
        try {
            return await this.repository.findOne(options);
        } catch (error) {
            throw new Error(`Error occurred while finding entity with options ${options}: ${error.message}`);
        }
    }
    public async create(data: DeepPartial<T>[]): Promise<T[]> {
        try {
            const entity = this.repository.create(data);
            return await this.repository.save(entity);
        } catch (error) {
            throw new Error(`Error occurred while creating entity: ${error.message}`);
        }
    }

    public async update(criteria: string | string[] | number | number[] | Date | Date[] | ObjectId | ObjectId[] | FindOptionsWhere<T>, partialEntity: QueryDeepPartialEntity<T>): Promise<void> {
        try {
            await this.repository.update(criteria, partialEntity);
        } catch (error) {
            throw new Error(`Error occurred while updating entity with criteria ${JSON.stringify(criteria)}: ${error.message}`);
        }
    }

    public async delete(criteria: string | string[] | number | number[] | Date | Date[] | ObjectId | ObjectId[] | FindOptionsWhere<T>): Promise<void> {
        try {
            await this.repository.delete(criteria);
        } catch (error) {
            throw new Error(`Error occurred while deleting entity with criteria: ${JSON.stringify(criteria)}: ${error.message}`);
        }
    }
}
