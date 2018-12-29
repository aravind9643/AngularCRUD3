import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { FormComponent } from './form/form.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { EmpformComponent } from './empform/empform.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    FormComponent,
    EmployeeComponent,
    StudentComponent,
    EmpformComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
