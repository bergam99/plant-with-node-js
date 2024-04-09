import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Plant } from "./entities/Plant";
import { User } from "./entities/User";

dotenv.config({ path: ".env.local" });

const AppDataSource = new DataSource({
  entities: [Plant, User],
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
});

export default AppDataSource;
