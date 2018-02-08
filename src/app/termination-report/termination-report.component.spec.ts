import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminationReportComponent } from './termination-report.component';

describe('TerminationReportComponent', () => {
  let component: TerminationReportComponent;
  let fixture: ComponentFixture<TerminationReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminationReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
