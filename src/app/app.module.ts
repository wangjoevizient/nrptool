import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ManageResidentsComponent } from './manage-residents/manage-residents.component';
import { SurveyStatusComponent } from './survey-status/survey-status.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManageResidentsComponent,
    SurveyStatusComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		CommonModule,
    HttpModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
	bootstrap: [AppComponent],
	schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
