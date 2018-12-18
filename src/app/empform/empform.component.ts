import { Component, OnInit } from '@angular/core';
import { EmpDetails } from './empform.model';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.css']
})
export class EmpformComponent implements OnInit {
  Employee: EmpDetails;
  data;
  id;
  row_version;
  showbtn: boolean = false;
  constructor(private api: ApiService, private route: ActivatedRoute, private routeurl: Router) {
    this.Employee = new EmpDetails();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(resp => {
      this.id = resp.get('id');
    });
    if (this.id) {
      this.editEmp();
    }
  }
  addEmp(Employee: EmpDetails) {
    Employee.formname = "sc_employees4";
    this.api.postEmpData(Employee).subscribe(resp => {
      alert(resp['status']);
    });
    this.Employee = new EmpDetails();
    this.routeurl.navigateByUrl('employees');
  }
  editEmp() {
    this.api.getEmpByID(this.id).subscribe(resp => {
      this.Employee.data = resp['data'];
      this.row_version = resp['data'].row_version;
      this.showbtn = true;
    });
  }
  modEmp(emp: EmpDetails) {
    emp.formname = "sc_employees4";
    this.api.updateEmpData(this.id, this.row_version, emp).subscribe(resp => {
      alert(resp['status']);
    });
    this.routeurl.navigateByUrl('employees');
  }
}
