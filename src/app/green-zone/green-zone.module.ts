import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreenZoneRoutingModule } from './green-zone-routing.module';
import { GreenMainComponent } from './green-main/green-main.component';
import { HomeModuleModule } from '../home-module/home-module.module';


@NgModule({
  declarations: [
    GreenMainComponent
  ],
  imports: [
    CommonModule,
    GreenZoneRoutingModule,
    HomeModuleModule
  ]
})
export class GreenZoneModule { }
