import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('employees')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Roles('HR', 'ADMIN')
  @ApiOperation({ summary: 'Create a new employee (HR/ADMIN only)' })
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Roles('EMPLOYEE', 'HR', 'ADMIN')
  @ApiOperation({ summary: 'Get all employees' })
  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Roles('EMPLOYEE', 'HR', 'ADMIN')
  @ApiOperation({ summary: 'Get a specific employee' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(+id);
  }

  @Roles('HR', 'ADMIN')
  @ApiOperation({ summary: 'Update an employee (HR/ADMIN only)' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeesService.update(+id, updateEmployeeDto);
  }

  @Roles('ADMIN')
  @ApiOperation({ summary: 'Delete an employee (ADMIN only)' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(+id);
  }
}
