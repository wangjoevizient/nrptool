import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {
  constructor(private _http: Http) { 
	}

	public GetAllOrganizations = (): Observable<any> => {
		return this._http.get(environment.webapi_root + 'GetOrganizationData')
				.map((response: Response) => <any>response.json());
	}

	public GetRNData = (): Observable<any> => { 
		return this._http.get(environment.webapi_root + "GetDemographicsData/235")
			.map((response: Response) => <any>response.json());
	}
}