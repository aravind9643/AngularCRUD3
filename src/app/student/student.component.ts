import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  StudentData;
  offset = 0;
  sort_type = "asc";
  StudentCols = {
    "SID": "sc__sc_employees4__studentid5c14998f34841d67f32c3a10",
    "Name": "sc__sc_employees4__name5c14999034841d68042c37a4",
    "Age": "sc__sc_employees4__age5c14999034841d67e22c72d0",
    "Gender": "sc__sc_employees4__gender5c14999034841d67e22c72d4",
    "Course": "sc__sc_employees4__course5c14999134841d67d12c8356",
    "Mobile": "sc__sc_employees4__mobile_number5c14999134841d67f32c3a14",
    "Address": "sc__sc_employees4__address5c14999134841d67d12c835a"
  }
  constructor(private api: ApiService) { }
  form = "form";
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.api.getStuAll(this.offset, this.sort_type).subscribe(resp => {
      this.StudentData = resp['data'];
    });
  }
  delete(obj) {
    if (confirm("Delete ?")) {
      this.api.deleteStu(obj.id, obj.row_version).subscribe(resp => {
        alert("Deleted");
        this.loadData();
      });
    }
  }
  scrolled() {
    this.offset = 15;
    this.loadData();
  }
  goNext() {
    this.offset = 30;
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
