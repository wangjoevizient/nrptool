import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {

	private orgId = new BehaviorSubject<any>(0);
  orgId$ = this.orgId.asObservable();

  changeOrgId( data: number) {
    this.orgId.next(data);
  }
}
