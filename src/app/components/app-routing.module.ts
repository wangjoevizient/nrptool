import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageResidentsComponent } from './manage-residents/manage-residents.component';
import { SurveyStatusComponent} from './survey-status/survey-status.component';
import { AddResidentComponent} from './add-resident/add-resident.component';
import { ManageresidentFiltersComponent } from './manageresident-filters/manageresident-filters.component';

const routes: Routes = [
	{
		path: '',
		component: ManageResidentsComponent
	},
	{
		path: 'manage-residents',
		component: ManageResidentsComponent
	},
	{
		path: 'add-resident',
		component: AddResidentComponent
	},
	{
		path: 'survey-status',
		component: SurveyStatusComponent
	},
	{
		path: 'manage-residents-filter',
		component: ManageresidentFiltersComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
