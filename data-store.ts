import { DataSource } from "typeorm";
import { DBConfig } from "./db-config";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: DBConfig.POSTGRES_HOST,
    port: 5432,
    username: DBConfig.POSTGRES_USER,
    password: DBConfig.POSTGRES_PASSWORD,
    database: DBConfig.POSTGRES_DATABASE,
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))