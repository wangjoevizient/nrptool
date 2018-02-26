import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageResidentsComponent } from './manage-residents.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatFormFieldModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


describe('ManageResidentsComponent', () => {
  let component: ManageResidentsComponent;
  let fixture: ComponentFixture<ManageResidentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [		
				BrowserAnimationsModule,
				MatTableModule,
				MatSortModule,
				MatFormFieldModule,
				MatPaginatorModule,
				MatIconModule,
				MatButtonModule],
      declarations: [ ManageResidentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
