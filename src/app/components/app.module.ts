import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ManageResidentsComponent } from './manage-residents/manage-residents.component';
import { SurveyStatusComponent } from './survey-status/survey-status.component';
import { DataService} from '../services/data.service'
import { SharedService} from '../services/shared.service'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AddResidentComponent } from './add-resident/add-resident.component';
import { TerminationReportComponent } from './termination-report/termination-report.component';
import { EditColumnsComponent } from './edit-columns/edit-columns.component'
//Angular Material Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material'
import { MatDialogModule } from '@angular/material/dialog';
//Pips
import { BooleanPipe } from '../pipes/boolean.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ManageResidentsComponent,
    SurveyStatusComponent,
    AddResidentComponent,
		TerminationReportComponent,
		EditColumnsComponent,
		BooleanPipe
  ],
  imports: [
		BrowserModule,
		AppRoutingModule,
		CommonModule,
    HttpModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		MatIconModule,
		MatButtonModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatDialogModule
	],
	entryComponents: [
		EditColumnsComponent
	],
  providers: [DataService, SharedService],
	bootstrap: [AppComponent],
	schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
