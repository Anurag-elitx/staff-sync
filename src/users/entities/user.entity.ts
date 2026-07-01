import { Column, Model, Table, DataType, Unique } from 'sequelize-typescript';
import { Exclude } from 'class-transformer';

@Table({ tableName: 'users', timestamps: true })
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Unique
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  passwordHash: string;

  @Column({
    type: DataType.ENUM('ADMIN', 'HR', 'EMPLOYEE'),
    defaultValue: 'EMPLOYEE',
  })
  role: string;
}
