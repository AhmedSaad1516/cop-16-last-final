import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreenMainComponent } from './green-main/green-main.component';

const routes: Routes = [
  {path:'',component:GreenMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GreenZoneRoutingModule { }
