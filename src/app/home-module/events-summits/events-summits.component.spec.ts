import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSummitsComponent } from './events-summits.component';

describe('EventsSummitsComponent', () => {
  let component: EventsSummitsComponent;
  let fixture: ComponentFixture<EventsSummitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsSummitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsSummitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
