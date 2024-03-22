import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../crud-ops/entities/base.entity';

@Entity()
export class User extends BaseEntity {
    @Column()
    name: string;
}