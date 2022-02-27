import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparateurminiComponent } from './separateurmini.component';

describe('SeparateurminiComponent', () => {
  let component: SeparateurminiComponent;
  let fixture: ComponentFixture<SeparateurminiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparateurminiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparateurminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
