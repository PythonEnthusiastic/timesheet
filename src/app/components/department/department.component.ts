import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Department } from 'src/app/interfaces/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})

export class DepartmentComponent implements OnInit {
  departments: Department[];

  constructor(
    private departmentsService: DepartmentsService,
  ) {}

  ngOnInit(): void{
    this.departments = this.departmentsService.departments;
  }
}
