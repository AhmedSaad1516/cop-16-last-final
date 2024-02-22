import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadRiyadhComponent } from './road-riyadh.component';

describe('RoadRiyadhComponent', () => {
  let component: RoadRiyadhComponent;
  let fixture: ComponentFixture<RoadRiyadhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadRiyadhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadRiyadhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
