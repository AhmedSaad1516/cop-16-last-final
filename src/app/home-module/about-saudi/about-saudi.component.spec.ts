import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSaudiComponent } from './about-saudi.component';

describe('AboutSaudiComponent', () => {
  let component: AboutSaudiComponent;
  let fixture: ComponentFixture<AboutSaudiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSaudiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSaudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
