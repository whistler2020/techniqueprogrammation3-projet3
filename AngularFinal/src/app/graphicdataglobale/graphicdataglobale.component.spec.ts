import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicdataglobaleComponent } from './graphicdataglobale.component';

describe('GraphicdataglobaleComponent', () => {
  let component: GraphicdataglobaleComponent;
  let fixture: ComponentFixture<GraphicdataglobaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicdataglobaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicdataglobaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
