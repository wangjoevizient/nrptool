import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ManageResidentsComponent } from './manage-residents/manage-residents.component';
import { SurveyStatusComponent } from './survey-status/survey-status.component';
import { DataService} from './services/data.service'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AddResidentComponent } from './add-resident/add-resident.component';
import { TerminationReportComponent } from './termination-report/termination-report.component';
//Angular Material Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManageResidentsComponent,
    SurveyStatusComponent,
    AddResidentComponent,
		TerminationReportComponent,
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		CommonModule,
    HttpModule,
    FormsModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		MatIconModule,
		MatButtonModule
  ],
  providers: [DataService],
	bootstrap: [AppComponent],
	schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
