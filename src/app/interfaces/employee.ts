export interface Employee {
    [key: string]: string | undefined | number;

    id: string;
    departmentId: string | undefined;
    name: string;
    payRate: number;
    monday: number;
    tuesday: number;
    wednesday: number;
    thursday: number;
    friday: number;
    saturday: number;
    sunday: number;
}
