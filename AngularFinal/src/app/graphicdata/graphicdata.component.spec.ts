import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicdataComponent } from './graphicdata.component';

describe('GraphicdataComponent', () => {
  let component: GraphicdataComponent;
  let fixture: ComponentFixture<GraphicdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
