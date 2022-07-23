import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: import("c:/Users/rthwl/Workspace-Angular/src/app/employee").IEmployee[] | undefined;

  // public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    // this.employees = this._employeeService.getEmployees();
  // employees = [];

    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data);
  }

}
