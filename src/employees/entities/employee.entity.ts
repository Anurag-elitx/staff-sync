import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'employees', timestamps: true })
export class Employee extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.STRING })
  department: string;

  @Column({ type: DataType.STRING })
  position: string;

  @Column({ type: DataType.STRING })
  documentUrl: string;
}
