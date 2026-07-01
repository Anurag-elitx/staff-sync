import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employee)
    private employeeModel: typeof Employee,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    return this.employeeModel.create({ ...createEmployeeDto } as any);
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.findAll();
  }

  async findOne(id: number): Promise<Employee> {
    const employee = await this.employeeModel.findByPk(id);
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return employee;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    const employee = await this.findOne(id);
    return employee.update({ ...updateEmployeeDto } as any);
  }

  async remove(id: number): Promise<void> {
    const employee = await this.findOne(id);
    await employee.destroy();
  }
}
