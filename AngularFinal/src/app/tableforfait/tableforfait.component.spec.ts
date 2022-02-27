import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableforfaitComponent } from './tableforfait.component';

describe('TableforfaitComponent', () => {
  let component: TableforfaitComponent;
  let fixture: ComponentFixture<TableforfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableforfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableforfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
