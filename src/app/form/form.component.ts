import { Component, OnInit } from '@angular/core';
import { FormModel } from './form.model';
import { ApiService } from './../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  student: FormModel;
  data;
  id;
  row_version;
  showbtn: boolean = false;
  constructor(private api: ApiService, private route: ActivatedRoute, private routeurl: Router) {
    this.student = new FormModel();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(resp => {
      this.id = resp.get('id');
    });
    if (this.id) {
      this.editStudent();
    }
  }
  addStudent(student: FormModel) {
    student.formname = "sc_employees4";
    this.api.postStuData(student).subscribe(resp => {
      alert(resp['status']);
    });
    this.student = new FormModel();
    this.routeurl.navigateByUrl('students');
  }
  editStudent() {
    this.api.getStuByID(this.id).subscribe(resp => {
      this.student.data = resp['data'];
      this.row_version = resp['data'].row_version;
      this.showbtn = true;
    });
  }
  modStudent(student: FormModel) {
    student.formname = "sc_employees4";
    this.api.updateStuData(this.id, this.row_version, student).subscribe(resp => {
      alert(resp['status']);
    });
    this.routeurl.navigateByUrl('students');
  }
}
