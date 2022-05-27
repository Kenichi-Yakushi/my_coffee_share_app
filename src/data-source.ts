import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "ssr-sample-db",
  port: 3306,
  username: "nodeexpressor",
  password: "secret",
  database: "my_coffee_share_app_db",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});

//export default AppDataSource;
