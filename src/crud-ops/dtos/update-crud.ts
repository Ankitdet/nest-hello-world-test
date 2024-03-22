import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudDto } from './create-crud';

export class UpdateCrudDto extends PartialType(CreateCrudDto) { }