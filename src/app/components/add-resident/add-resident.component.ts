import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
import { rnInfo } from '../../models/rnInfo.model';
import { Router } from '@angular/router';
@Component({
	selector: 'app-add-resident',
	templateUrl: './add-resident.component.html',
	styleUrls: ['./add-resident.component.scss']
})
export class AddResidentComponent implements OnInit {

	//// To Fetch Type of unit
	typeofunits: string[];
	selectedtypeofunit: number;

	//// To Fetch Gender
	genders: any[];
	selectedgender: number;

	//// To Fetch Ethnicity
	Ethnicitys: any[];
	selectedEthnicity: number;

	//// To Fetch Degree Received
	DegreeReceiveds: any[];
	selectedDegreeReceived: number;

	//// To Fetch Previous Nursing Degree
	Previousnursingdegrees: any[];
	selectedPreviousnursingdegree: number;

	//// To Fetch Overall grade point average
	OverallGPAs: any[];
	selectedOverallGPA: number;

	mainform: FormGroup;
	rniderrormsg: any;
	orgEmailErrorMsg: any;
	orgId: number;

	constructor(private _service: DataService, private sharedService: SharedService, private router: Router) {
		_service.GetTypeofUnit().subscribe(data => this.typeofunits = JSON.parse(data),
			error => console.log(error),
			() => console.log(this.typeofunits));

		_service.GetGender().subscribe(data => this.genders = JSON.parse(data),
			error => console.log(error),
			() => console.log(this.genders));

		_service.GetEthnicity().subscribe(data => this.Ethnicitys = JSON.parse(data),
			error => console.log(error),
			() => console.log(this.Ethnicitys));

		_service.GetDegreeReceived().subscribe(data => this.DegreeReceiveds = JSON.parse(data),
			error => console.log(error),
			() => console.log(this.DegreeReceiveds));

		_service.GetPreviousnursingdegree().subscribe(data => this.Previousnursingdegrees = JSON.parse(data),
			error => console.log(error),
			() => console.log(this.Previousnursingdegrees));

		_service.GetOverallGPA().subscribe(data => this.OverallGPAs = JSON.parse(data),
			error => console.log(error),
			() => console.log(this.OverallGPAs));

		this.sharedService.orgId$.subscribe(orgId => {
			this.orgId = orgId;
		});

	}

	ngOnInit() {
		this.mainform = new FormGroup({
			rnId: new FormControl('', Validators.required),
			firstName: new FormControl('', Validators.required),
			lastName: new FormControl('', Validators.required),
			Organizationemailaddress: new FormControl('', [Validators.required,
			Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
			cohortDate: new FormControl('', Validators.required),
			employmentStartDate: new FormControl('', Validators.required),
			typeOfUnit: new FormControl('', Validators.required),
			typeOfUnitOther: new FormControl(),
			age: new FormControl('', Validators.required),
			gender: new FormControl('', Validators.required),
			ethnicity: new FormControl('', Validators.required),
			education: new FormControl('', Validators.required),
			degreeReceived: new FormControl('', Validators.required),
			degreeReceivedOther: new FormControl(),
			previousNursingDegree: new FormControl('', Validators.required),
			major: new FormControl(),
			overallGPA: new FormControl('', Validators.required),
			meetingPlaceAccess: new FormControl('No', Validators.required),
		});
	}

	validateAllFormFields(formGroup: FormGroup) {         //{1}
		Object.keys(formGroup.controls).forEach(field => {  //{2}
			const control = formGroup.get(field);             //{3}
			if (control instanceof FormControl) {             //{4}
				control.markAsTouched({ onlySelf: true });
			} else if (control instanceof FormGroup) {        //{5}
				this.validateAllFormFields(control);            //{6}
			}
		});
	}

	CheckRNIDExists(event: any) {
		this.sharedService.orgId$.subscribe(orgId => {
			this.orgId = orgId;
		});

		console.log("CheckRNIDExists executed");
		console.log(event.target.value);
		console.log("orgid-" + this.orgId);
		this._service.CheckRNIDExists(this.orgId, event.target.value).subscribe(data => {
		this.rniderrormsg = JSON.parse(data)[0].cntRNID == 1 ? 'RN ID already exists' : '';
			//this.rniderrormsg=this.rniderrormsg[0].cntRNID;
			console.log(this.rniderrormsg)
		}
			,
			error => console.log(error));
	}

	ValidateOrganizationEmailAddress(event: any) {
		this.sharedService.orgId$.subscribe(orgId => {
			this.orgId = orgId;
		});

		console.log("ValidateOrganizationEmailAddress executed");
		console.log(event.target.value);
		console.log("orgid-" + this.orgId);
		this._service.ValidateOrganizationEmailAddress(this.orgId, event.target.value).subscribe(data => {
		this.orgEmailErrorMsg = JSON.parse(data)[0].ReturnCode != 0 ? JSON.parse(data)[0].ReturnMessage : '';

			console.log(JSON.parse(data));
			console.log(this.orgEmailErrorMsg)
		}
			,
			error => console.log(error));
	}

	onSubmit() {

		if (this.mainform.valid) {
			var model = this.mainform.value as rnInfo;

			console.log(this.sharedService.orgId$);
			console.log(model);

			this._service.postNewResident(model).subscribe(data => {
				this.router.navigate(['manage-residents']);
				console.log("data saved");
			});
		}
		else
			this.validateAllFormFields(this.mainform)

	}

}
