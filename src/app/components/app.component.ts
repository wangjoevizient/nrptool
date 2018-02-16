import { Component } from '@angular/core';
import { RouterLinkActive, Router } from '@angular/router';
import { Organization } from '../models/organization.model';
import { DataService } from '../services/data.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  
  organizations: Organization[];
  selectedOrganization: number;

	constructor(private dataService: DataService, 
		private sharedService: SharedService,
		private router: Router) {
		this.dataService.GetAllOrganizations().subscribe(
			data => {
				this.organizations = JSON.parse(data);
				//default to first organization in list
				if(this.organizations.length > 0) {
					this.selectedOrganization = this.organizations[0].orgId;
					this.sharedService.changeOrgId(this.organizations[0].orgId);
				}
			},
			error => console.log(error),
			() => {console.log(this.organizations)});
	}
	
	onOrgChange(newValue) {
		this.sharedService.changeOrgId(newValue);
	}

}
