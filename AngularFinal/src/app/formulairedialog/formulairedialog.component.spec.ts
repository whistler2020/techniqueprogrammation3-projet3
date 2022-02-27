import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairedialogComponent } from './formulairedialog.component';

describe('FormulairedialogComponent', () => {
  let component: FormulairedialogComponent;
  let fixture: ComponentFixture<FormulairedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairedialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
