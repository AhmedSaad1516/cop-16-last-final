import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterExhibitorsRoutingModule } from './register-exhibitors-routing.module';
import { RegisterForm1Component } from './register-form1/register-form1.component';
import { RegisterForm2Component } from './register-form2/register-form2.component';
import { RegisterForm3Component } from './register-form3/register-form3.component';
import { NgxDropzoneModule } from 'ngx-dropzone';



@NgModule({
  declarations: [
    RegisterForm1Component,
    RegisterForm2Component,
    RegisterForm3Component
  ],
  imports: [
    CommonModule,
    RegisterExhibitorsRoutingModule,
    NgxDropzoneModule
  ]
})
export class RegisterExhibitorsModule { }
 