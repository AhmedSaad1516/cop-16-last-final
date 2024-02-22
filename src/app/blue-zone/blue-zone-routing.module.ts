import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlueMainComponent } from './blue-main/blue-main.component';

const routes: Routes = [
  {path:'',component:BlueMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlueZoneRoutingModule { }
