import { Entity, ObjectIdColumn, Column, BaseEntity, Index } from "typeorm"

@Entity('users')
export class User extends BaseEntity {
  @ObjectIdColumn()
  _id: string

  @Column()
  fullName: string

  @Column()
  lastName: string

  @Column()
  email: string

}
