import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphicdata2Component } from './graphicdata2.component';

describe('Graphicdata2Component', () => {
  let component: Graphicdata2Component;
  let fixture: ComponentFixture<Graphicdata2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Graphicdata2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphicdata2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
