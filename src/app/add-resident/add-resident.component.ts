import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
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
  }

}
