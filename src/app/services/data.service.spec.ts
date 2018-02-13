import { TestBed, inject } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { environment } from '../../environments/environment';
import { rnInfo } from '../../models/rnInfo.model';

describe('DataService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [DataService]
		});
	});
	
  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
	}));
	
	fit('GIVEN_NoIdentity_WHEN_CallingGetOrgsList_THEN_ReturnAllOrgs', inject([DataService], (service: DataService) => {
		let orgs: rnInfo[] = [];
		service.GetAllOrganizations().subscribe(
				data => {
					this.orgs = JSON.parse(data);
					expect(orgs.length).toBeGreaterThan(0);
				},
			error => console.log(error),
			() => {console.log(this.orgs)});
		//expect(orgs[0].orgId)).toEqual(262);
	}));
});

