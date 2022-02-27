import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireforfaitComponent } from './formulaireforfait.component';

describe('FormulaireforfaitComponent', () => {
  let component: FormulaireforfaitComponent;
  let fixture: ComponentFixture<FormulaireforfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireforfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireforfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
