import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeminiforfaitComponent } from './listeminiforfait.component';

describe('ListeminiforfaitComponent', () => {
  let component: ListeminiforfaitComponent;
  let fixture: ComponentFixture<ListeminiforfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeminiforfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeminiforfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
