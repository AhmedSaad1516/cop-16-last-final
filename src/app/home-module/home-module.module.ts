import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModuleRoutingModule } from './home-module-routing.module';
import { MainComponent } from './main/main.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderSection1Component } from './slider-section1/slider-section1.component';
import { BillionSection2Component } from './billion-section2/billion-section2.component';
import { AboutSection3Component } from './about-section3/about-section3.component';
import { AboutSaudiComponent } from './about-saudi/about-saudi.component';
import { SaudiaEffortsComponent } from './saudia-efforts/saudia-efforts.component';
import { EventsSummitsComponent } from './events-summits/events-summits.component';
import { RoadRiyadhComponent } from './road-riyadh/road-riyadh.component';
import { PlanVistComponent } from './plan-vist/plan-vist.component';


@NgModule({
  declarations: [
    MainComponent,
    SliderSection1Component,
    BillionSection2Component,
    AboutSection3Component,
    AboutSaudiComponent,
    SaudiaEffortsComponent,
    EventsSummitsComponent,
    RoadRiyadhComponent,
    PlanVistComponent
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    CarouselModule
  ],
  exports:[
    PlanVistComponent
  ]
})
export class HomeModuleModule { }
