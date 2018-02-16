import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor(_service: DataService) { 
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


	}

  ngOnInit() {
		this.mainform = new FormGroup({
			rnId: new FormControl('', Validators.required),
			firstName: new FormControl('', Validators.required), 
			lastName: new FormControl('', Validators.required),
			email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
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
			major: new FormControl('', Validators.required),
			overallGPA: new FormControl('', Validators.required),
			meetingPlaceAccess: new FormControl('', Validators.required),
		});
  }

}
