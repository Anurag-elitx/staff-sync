import { Model } from 'sequelize-typescript';
export declare class Employee extends Model {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    department: string;
    position: string;
    documentUrl: string;
}
