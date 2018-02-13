import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {

	webapiRoot: string = environment.webapi_root;
  constructor(private _http: Http) { 
	}

	public GetAllOrganizations = (): Observable<any> => {
		return this._http.get(this.webapiRoot + 'GetOrganizationData')
				.map((response: Response) => <any>response.json());
	}

	public GetRNData = ( orgId ): Observable<any> => { 
		return this._http.get(this.webapiRoot + "GetDemographicsData/" + orgId)
			.map((response: Response) => <any>response.json());
	}

	public GetTypeofUnit = (): Observable<any> => {
		return this._http.get(this.webapiRoot + "GetTypeofUnit/19")
				.map((response: Response) => <any>response.json());
	}

	public GetGender = (): Observable<any> => {
			return this._http.get(this.webapiRoot + "GetGender/5")
					.map((response: Response) => <any>response.json());
	}

	public GetEthnicity = (): Observable<any> => {
			return this._http.get(this.webapiRoot + "GetEthnicity/3")
					.map((response: Response) => <any>response.json());

	}

	public GetDegreeReceived = (): Observable<any> => {
			return this._http.get(this.webapiRoot + "GetDegreeReceived/2")
					.map((response: Response) => <any>response.json());

	}

	public GetPreviousnursingdegree = (): Observable<any> => {
			return this._http.get(this.webapiRoot + "GetPreviousnursingdegree/15")
					.map((response: Response) => <any>response.json());

	}

	public GetOverallGPA = (): Observable<any> => {
			return this._http.get(this.webapiRoot + "GetOverallGPA/6")
					.map((response: Response) => <any>response.json());

	}

}