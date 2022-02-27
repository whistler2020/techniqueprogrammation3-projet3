import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionforfaitComponent } from './descriptionforfait.component';

describe('DescriptionforfaitComponent', () => {
  let component: DescriptionforfaitComponent;
  let fixture: ComponentFixture<DescriptionforfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionforfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionforfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
