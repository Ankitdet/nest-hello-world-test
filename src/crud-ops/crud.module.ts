import { Global, Module } from '@nestjs/common';
import { CrudService } from './crud-service';


@Global()
@Module({
    imports: [],
    providers: [CrudService as any],
    exports: [CrudService],
})
export class CrudModule { }