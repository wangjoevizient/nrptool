import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrganizationDataService {
    private actionUrl: string;
    constructor(private _http: Http) {

        //this.actionUrl = 'http://localhost:65444/api/values/GetOrgList';

        this.actionUrl = 'https://nursing.test.vizientinc.com/NRP-Admin-API/api/values/GetOrgList';
        
    }

    public GetAllOrganizations = (): Observable<any> => {
        return this._http.get(this.actionUrl)
            .map((response: Response) => <any>response.json());

    }
}  