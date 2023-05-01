import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-analytics-table',
  templateUrl: './analytics-table.component.html',
  styleUrls: ['./analytics-table.component.scss']
})

export class AnalyticsTableComponent implements OnInit {
  @Input()
  departmentId: string | undefined;

  weekdays: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  employees: Employee[] = [];
  employeeData: Employee[] = [
    {
      departmentId: '1',
      friday: 6,
      id: '1',
      monday: 4,
      name: 'a',
      payRate: 70,
      saturday: 7,
      sunday: 6,
      thursday: 5,
      tuesday: 3,
      wednesday: 4
    },
    {
      departmentId: '1',
      friday: 2,
      id: '2',
      monday: 4,
      name: 'b',
      payRate: 63,
      saturday: 1,
      sunday: 2,
      thursday: 3,
      tuesday: 3,
      wednesday: 4
    },
    {
      departmentId: '2',
      friday: 9,
      id: '3',
      monday: 8,
      name: 'c',
      payRate: 76,
      saturday: 7,
      sunday: 5,
      thursday: 4,
      tuesday: 7,
      wednesday: 5
    },
    {
      departmentId: '3',
      friday: 2,
      id: '4',
      monday: 3,
      name: 'd',
      payRate: 56,
      saturday: 3,
      sunday: 2,
      thursday: 0,
      tuesday: 4,
      wednesday: 5
    }
  ];

  constructor(
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    // this.employees = this.employeeData.filter(employee => employee.departmentId === this.departmentId)
    this.employeeService.getEmployeeHoursByDepartmnet(this.departmentId).subscribe((employees: Employee[]) => {
      this.employees = employees;
    })
  }

  getTotalHours(employee: Employee): number {
    return employee.monday + employee.tuesday + employee.wednesday + 
      employee.thursday + employee.friday + employee.saturday + employee.sunday
  }
}
