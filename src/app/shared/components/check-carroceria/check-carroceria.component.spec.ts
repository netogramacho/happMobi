import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCarroceriaComponent } from './check-carroceria.component';

describe('CheckCarroceriaComponent', () => {
  let component: CheckCarroceriaComponent;
  let fixture: ComponentFixture<CheckCarroceriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCarroceriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCarroceriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
