import { CrudModule } from "./common-module/base.module";
import { UserModule } from "./routes/user/user.module";

export const AllModules = [
    CrudModule,
    UserModule,
]