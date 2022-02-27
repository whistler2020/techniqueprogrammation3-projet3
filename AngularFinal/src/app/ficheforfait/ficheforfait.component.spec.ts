import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheforfaitComponent } from './ficheforfait.component';

describe('FicheforfaitComponent', () => {
  let component: FicheforfaitComponent;
  let fixture: ComponentFixture<FicheforfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheforfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheforfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
