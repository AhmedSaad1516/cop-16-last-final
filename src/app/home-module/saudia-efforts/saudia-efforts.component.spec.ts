import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudiaEffortsComponent } from './saudia-efforts.component';

describe('SaudiaEffortsComponent', () => {
  let component: SaudiaEffortsComponent;
  let fixture: ComponentFixture<SaudiaEffortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaudiaEffortsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaudiaEffortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
