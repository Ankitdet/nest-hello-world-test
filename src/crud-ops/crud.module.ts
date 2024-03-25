import { Global, Module } from '@nestjs/common';
import { BaseCrudService } from './crud-service';


@Global()
@Module({
    imports: [],
    providers: [BaseCrudService as any],
    exports: [BaseCrudService],
})
export class CrudModule { }