import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Miniforfait1Component } from './miniforfait1.component';

describe('Miniforfait1Component', () => {
  let component: Miniforfait1Component;
  let fixture: ComponentFixture<Miniforfait1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Miniforfait1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Miniforfait1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
