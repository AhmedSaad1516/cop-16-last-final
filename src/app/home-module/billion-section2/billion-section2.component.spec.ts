import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillionSection2Component } from './billion-section2.component';

describe('BillionSection2Component', () => {
  let component: BillionSection2Component;
  let fixture: ComponentFixture<BillionSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillionSection2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillionSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
