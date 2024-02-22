import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterGreenZoneRoutingModule } from './register-green-zone-routing.module';
import { RegisterMainComponent } from './register-main/register-main.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    RegisterMainComponent
  ],
  imports: [
    CommonModule,
    RegisterGreenZoneRoutingModule,
    MatDialogModule
  ]
})
export class RegisterGreenZoneModule { }
