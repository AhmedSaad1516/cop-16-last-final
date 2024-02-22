import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueMainComponent } from './blue-main.component';

describe('BlueMainComponent', () => {
  let component: BlueMainComponent;
  let fixture: ComponentFixture<BlueMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
