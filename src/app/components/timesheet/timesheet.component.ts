import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Department } from 'src/app/interfaces/department';
import { DepartmentsService } from 'src/app/services/departments.service';
import { AbstractControl, ValidatorFn, FormControl } from '@angular/forms';
import { Employee } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent {
  departments!: Department[];
  department!: Department;
  employeeNameFC = new FormControl('', this.nameValidator());
  employees: Employee[] = [];
  employeeId = 0;

  constructor(
    private route: ActivatedRoute,
    private departmentsService: DepartmentsService
  ) { }

  ngOnInit(): void {
    this.departments = this.departmentsService.departments;
    this.department = this.departments.find(department => department.id === this.route.snapshot.params['id']);
  }

  addEmployee(): void {
    if (this.employeeNameFC.value) {
      this.employeeId++;

      this.employees.push({
        id: this.employeeId.toString(),
        departmentId: this.department?.id,
        name: this.employeeNameFC.value,
        payRate: Math.floor(Math.random() * 50) + 50
      });

      this.employeeNameFC.setValue('')
    }
  }

  nameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let error = null;
      if (this.employees && this.employees.length) {
        this.employees.forEach(employee => {
          if (employee.name.toLocaleLowerCase() === control.value.toLowerCase()) {
            error = { duplicate: true };
          }
        })
      }
      return error;
    }
  }
}
