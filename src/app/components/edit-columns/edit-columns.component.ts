import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { columnSetting } from '../../models/columnSetting'
@Component({
  selector: 'app-edit-columns',
  templateUrl: './edit-columns.component.html',
  styleUrls: ['./edit-columns.component.scss']
})
export class EditColumnsComponent implements OnInit {

	mainform: FormGroup;
	setting: columnSetting;

	constructor(
    public dialogRef: MatDialogRef<EditColumnsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCancel(): void {
    this.dialogRef.close();
	}
	
  ngOnInit() {

		this.setting = JSON.parse(localStorage.getItem('showColumns'));

		this.mainform = new FormGroup({
			rnId: new FormControl(this.setting.rnId),
			firstName: new FormControl(this.setting.firstName), 
			lastName: new FormControl(this.setting.lastName),
			email: new FormControl(this.setting.email),
			cohortDate: new FormControl(this.setting.cohortDate),
			employmentStartDate: new FormControl(this.setting.employmentStartDate),
			typeOfUnit: new FormControl(this.setting.typeOfUnit),
			age: new FormControl(this.setting.age),
			gender: new FormControl(this.setting.gender),
			ethnicity: new FormControl(this.setting.ethnicity),
			education: new FormControl(this.setting.education),
			degreeReceived: new FormControl(this.setting.degreeReceived),
			previousNursingDegree: new FormControl(this.setting.previousNursingDegree),
			overallGPA: new FormControl(this.setting.overallGPA),
			meetingPlaceAccess: new FormControl(this.setting.meetingPlaceAccess),
			leave: new FormControl(this.setting.leave),
			termination: new FormControl(this.setting.termination),
			terminationUpdatedBy: new FormControl(this.setting.terminationUpdatedBy),
			typeofLeave: new FormControl(this.setting.typeofLeave),
			dateTerminated: new FormControl(this.setting.dateTerminated),
			leaveFromDate: new FormControl(this.setting.leaveFromDate),
			terminationReason: new FormControl(this.setting.terminationReason),
			leaveToDate: new FormControl(this.setting.leaveToDate),
			terminationLastUpdatedOn: new FormControl(this.setting.terminationLastUpdatedOn),
		});
	}
	
	onSubmit() {
		localStorage.setItem('showColumns',  JSON.stringify(this.mainform.value));
		this.setting = JSON.parse(localStorage.getItem('showColumns'));
		this.dialogRef.close(this.setting);
	}

	onResetSelection() {
		this.mainform.reset();
		this.mainform.controls.rnId.setValue(true);
		this.mainform.controls.cohortDate.setValue(true);
		this.mainform.controls.firstName.setValue(true);
		this.mainform.controls.lastName.setValue(true);
		this.mainform.controls.typeOfUnit.setValue(true);
		this.mainform.controls.leave.setValue(true);
		this.mainform.controls.termination.setValue(true);
	}

	onAllLeave(event) {
		console.log(event);
		let sel = event.target.checked;
		this.mainform.controls.leave.setValue(sel);
		this.mainform.controls.termination.setValue(sel);
		this.mainform.controls.terminationUpdatedBy.setValue(sel);
		this.mainform.controls.typeofLeave.setValue(sel);
		this.mainform.controls.dateTerminated.setValue(sel);
		this.mainform.controls.leaveFromDate.setValue(sel);
		this.mainform.controls.terminationReason.setValue(sel);
		this.mainform.controls.leaveToDate.setValue(sel);
		this.mainform.controls.terminationLastUpdatedOn.setValue(sel);
	}

	onAllDemographics(event) {
		let sel = event.target.checked;
		this.mainform.controls.rnId.setValue(sel);
		this.mainform.controls.firstName.setValue(sel);
		this.mainform.controls.lastName.setValue(sel);
		this.mainform.controls.email.setValue(sel);
		this.mainform.controls.cohortDate.setValue(sel);
		this.mainform.controls.employmentStartDate.setValue(sel);
		this.mainform.controls.typeOfUnit.setValue(sel);
		this.mainform.controls.age.setValue(sel);
		this.mainform.controls.gender.setValue(sel);
		this.mainform.controls.ethnicity.setValue(sel);
		this.mainform.controls.education.setValue(sel);
		this.mainform.controls.degreeReceived.setValue(sel);
		this.mainform.controls.previousNursingDegree.setValue(sel);
		this.mainform.controls.overallGPA.setValue(sel);
		this.mainform.controls.meetingPlaceAccess.setValue(sel);
	}
}
