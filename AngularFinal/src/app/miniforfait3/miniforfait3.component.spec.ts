import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Miniforfait3Component } from './miniforfait3.component';

describe('Miniforfait3Component', () => {
  let component: Miniforfait3Component;
  let fixture: ComponentFixture<Miniforfait3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Miniforfait3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Miniforfait3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
