"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const employee_entity_1 = require("./entities/employee.entity");
let EmployeesService = class EmployeesService {
    constructor(employeeModel) {
        this.employeeModel = employeeModel;
    }
    async create(createEmployeeDto) {
        return this.employeeModel.create({ ...createEmployeeDto });
    }
    async findAll() {
        return this.employeeModel.findAll();
    }
    async findOne(id) {
        const employee = await this.employeeModel.findByPk(id);
        if (!employee) {
            throw new common_1.NotFoundException(`Employee with ID ${id} not found`);
        }
        return employee;
    }
    async update(id, updateEmployeeDto) {
        const employee = await this.findOne(id);
        return employee.update({ ...updateEmployeeDto });
    }
    async remove(id) {
        const employee = await this.findOne(id);
        await employee.destroy();
    }
};
exports.EmployeesService = EmployeesService;
exports.EmployeesService = EmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(employee_entity_1.Employee)),
    __metadata("design:paramtypes", [Object])
], EmployeesService);
//# sourceMappingURL=employees.service.js.map