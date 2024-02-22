import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSection1Component } from './slider-section1.component';

describe('SliderSection1Component', () => {
  let component: SliderSection1Component;
  let fixture: ComponentFixture<SliderSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderSection1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
