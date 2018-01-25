import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { Organization } from './organization.model';
import { OrganizationDataService } from './OrganizationDataService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  
  organizations: Organization[];
  selectedOrganization: number;

  constructor(private OrgService: OrganizationDataService) {
      this.OrgService.GetAllOrganizations().subscribe(data => this.organizations = data,
          error => console.log(error),
          () => console.log(this.organizations));
  }

}
