import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanVistComponent } from './plan-vist.component';

describe('PlanVistComponent', () => {
  let component: PlanVistComponent;
  let fixture: ComponentFixture<PlanVistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanVistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanVistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
