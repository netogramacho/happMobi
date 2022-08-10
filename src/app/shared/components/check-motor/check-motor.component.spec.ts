import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMotorComponent } from './check-motor.component';

describe('CheckMotorComponent', () => {
  let component: CheckMotorComponent;
  let fixture: ComponentFixture<CheckMotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckMotorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckMotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
