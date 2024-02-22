import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlueZoneRoutingModule } from './blue-zone-routing.module';
import { BlueMainComponent } from './blue-main/blue-main.component';
import { BluePlanComponent } from './blue-plan/blue-plan.component';


@NgModule({
  declarations: [
    BlueMainComponent,
    BluePlanComponent
  ],
  imports: [
    CommonModule,
    BlueZoneRoutingModule
  ]
})
export class BlueZoneModule { }
