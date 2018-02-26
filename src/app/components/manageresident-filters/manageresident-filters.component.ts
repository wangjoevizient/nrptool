import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import { ManageResidentsComponent } from '../manage-residents/manage-residents.component';

@Component({
  selector: 'app-manageresident-filters',
  templateUrl: './manageresident-filters.component.html',
  styleUrls: ['./manageresident-filters.component.scss']
})
export class ManageresidentFiltersComponent implements OnInit {


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
  
    //mainform: FormGroup;
  
    orgId: number;
    //private router: Router

  constructor(private _service: DataService,private sharedService: SharedService)
     { 
//public thisDialofRef: MatDialogRef<ManageResidentsComponent>, @Inject(MAT_DIALOG_DATA) public orgid:number)
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
      this.orgId=orgId;
    });
  }

  ngOnInit() {
  }

  // onFilter(){
  //   this.thisDialofRef.close('Confirm');
  // }

  // onCancel(){
  //   this.thisDialofRef.close('Cancel');
  // }

}
