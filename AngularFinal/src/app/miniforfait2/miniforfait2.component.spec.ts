import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Miniforfait2Component } from './miniforfait2.component';

describe('Miniforfait2Component', () => {
  let component: Miniforfait2Component;
  let fixture: ComponentFixture<Miniforfait2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Miniforfait2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Miniforfait2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
