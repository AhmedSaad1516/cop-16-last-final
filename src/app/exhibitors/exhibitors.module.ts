import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhibitorsRoutingModule } from './exhibitors-routing.module';
import { ExhibitorsMainComponent } from './exhibitors-main/exhibitors-main.component';


@NgModule({
  declarations: [
    ExhibitorsMainComponent
  ],
  imports: [
    CommonModule,
    ExhibitorsRoutingModule
  ]
})
export class ExhibitorsModule { }
