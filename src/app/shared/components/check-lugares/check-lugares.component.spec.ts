import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckLugaresComponent } from './check-lugares.component';

describe('CheckLugaresComponent', () => {
  let component: CheckLugaresComponent;
  let fixture: ComponentFixture<CheckLugaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckLugaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckLugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
