import { EmployeesService } from './employees.service';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<import("./entities/employee.entity").Employee>;
    findAll(): Promise<import("./entities/employee.entity").Employee[]>;
    findOne(id: string): Promise<import("./entities/employee.entity").Employee>;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<import("./entities/employee.entity").Employee>;
    remove(id: string): Promise<void>;
}
