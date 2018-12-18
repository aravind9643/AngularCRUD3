import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormComponent } from './form/form.component';
import { EmpformComponent } from './empform/empform.component';

const routes: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: 'students/form', component: FormComponent },
  { path: 'employees/empform', component: EmpformComponent },
  { path: 'students/form/:id', component: FormComponent },
  { path: 'employees/empform/:id', component: EmpformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
