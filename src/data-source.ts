import "reflect-metadata"
import { DataSource } from "typeorm"
import { Post } from "./entity/Post"
import { User } from "./entity/User"
import { Category } from "./entity/Category"

export const AppDataSource = new DataSource({
  type: 'mongodb',
  useNewUrlParser: true,
  useUnifiedTopology: true,
  url: "mongodb://localhost/test2",
  // ssl: true,
  authSource: 'admin',
  entities: [User],
  synchronize: true,
  cache: true,
})
