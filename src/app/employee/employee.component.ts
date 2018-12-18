import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  EmpData;
  offset = 0;
  limit = 15;
  sort_type = "asc";
  form = "empform";
  EmpCols = {
    "EmpID": "sc__sc_employees3__empid5c13365b34841d68042c2f44",
    "Name": "sc__sc_employees3__name5c13365b34841d68042c2f48",
    "Gender": "sc__sc_employees3__gender5c13365b34841d68042c2f4c",
    "Mobile": "sc__sc_employees3__mobile_no_5c13365c34841d68042c2f50",
    "Address": "sc__sc_employees3__address5c13365c34841d68042c2f54"
  }

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.api.getEmpAll(this.limit, this.offset, this.sort_type).subscribe(resp => {
      this.EmpData = resp['data'];
    });
  }
  delete(obj) {
    if (confirm("Delete ?")) {
      this.api.deleteEmp(obj.id, obj.row_version).subscribe(resp => {
        alert("Deleted");
        this.loadData();
      });
    }
  }
  scrolled() {
    if (this.limit != 30) {
      this.limit += 15;
      this.loadData();
    }
  }
  goNext() {
    this.offset += 30;
    this.limit = 15;
    this.loadData();
  }
  sort() {
    if (this.sort_type == "asc") {
      this.sort_type = "desc";
    }
    else {
      this.sort_type = "asc";
    }
    this.loadData();
  }
}
