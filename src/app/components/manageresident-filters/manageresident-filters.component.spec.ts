import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageresidentFiltersComponent } from './manageresident-filters.component';

describe('ManageresidentFiltersComponent', () => {
  let component: ManageresidentFiltersComponent;
  let fixture: ComponentFixture<ManageresidentFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageresidentFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageresidentFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
