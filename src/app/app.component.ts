import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { Organization } from '../models/organization.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  
  organizations: Organization[];
  selectedOrganization: number;

  constructor(private dataService: DataService) {
		this.dataService.GetAllOrganizations().subscribe(data => this.organizations = data,
			error => console.log(error),
			() => console.log(this.organizations));
  }

}
