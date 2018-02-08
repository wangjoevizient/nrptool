import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-manage-residents',
  templateUrl: './manage-residents.component.html',
  styleUrls: ['./manage-residents.component.scss']
})
export class ManageResidentsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
		this.dataService.GetRNData().subscribe(data => this.rnData = data,
			error => console.log(error),
			() => console.log(this.rnData));
  }

	displayedColumns = ['rnId', 'cohortDate', 'firstName', 'lastName', 'unit', 'leave', 'terminate', 'mode'];
	rnData: IRNData[];
  dataSource = new MatTableDataSource(this.rnData);

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
	}

  ngAfterViewInit() {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
  }
}
export interface IRNData {
  rnId: string;
  cohortDate: string;
  firstName: string;
	lastName: string;
	unit: string;
	leave: string;
	terminate: string;
	mode: string;
}

// const RNDATA: IRNData[] = [
//   {rnId: '1000', cohortDate: '1/1/2001', firstName: 'John', lastName: 'Doe', unit: 'Medical/Surgical ICU Inpatient Unit', leave: 'No', terminate: 'Yes', mode: 'Edit'},
// 	{rnId: '1001', cohortDate: '1/1/2002', firstName: 'Gary', lastName: 'Dunn', unit: 'Medical/Surgical ICU Inpatient Unit', leave: 'No', terminate: 'Yes', mode: 'Edit'},
// 	{rnId: '1002', cohortDate: '1/1/2003', firstName: 'Lisa', lastName: 'Fink', unit: 'Medical/Surgical ICU Inpatient Unit', leave: 'No', terminate: 'Yes', mode: 'Edit'},
// 	{rnId: '1003', cohortDate: '1/1/2004', firstName: 'George', lastName: 'Cooper', unit: 'Medical/Surgical ICU Inpatient Unit', leave: 'No', terminate: 'Yes', mode: 'Edit'},
// 	{rnId: '1004', cohortDate: '1/1/2005', firstName: 'Sam', lastName: 'Smith', unit: 'Medical/Surgical ICU Inpatient Unit', leave: 'No', terminate: 'Yes', mode: 'Edit'},
// 	{rnId: '1005', cohortDate: '1/1/2006', firstName: 'Kirk', lastName: 'Henry', unit: 'Medical/Surgical ICU Inpatient Unit', leave: 'No', terminate: 'Yes', mode: 'Edit'},
// 	{rnId: '1006', cohortDate: '1/1/2007', firstName: 'David', lastName: 'Funk', unit: 'Medical/Surgical ICU Inpatient Unit', leave: 'No', terminate: 'Yes', mode: 'Edit'},
// 	{rnId: '1007', cohortDate: '1/1/2008', firstName: 'Jane', lastName: 'Kahn', unit: 'Medical/Surgical ICU Inpatient Unit', leave: 'No', terminate: 'Yes', mode: 'Edit'},
// 	{rnId: '1008', cohortDate: '1/2/2009', firstName: 'Noal', lastName: 'Zipper', unit: 'Medical/Surgical ICU Inpatient Unit', leave: 'No', terminate: 'Yes', mode: 'Edit'},
// 	{rnId: '1009', cohortDate: '1/1/2011', firstName: 'Joe', lastName: 'Kendrich', unit: 'Medical/Surgical ICU Inpatient Unit', leave: 'No', terminate: 'Yes', mode: 'Edit'},
// 	{rnId: '1010', cohortDate: '1/1/2012', firstName: 'Mary', lastName: 'Tang', unit: 'Medical/Surgical ICU Inpatient Unit', leave: 'No', terminate: 'Yes', mode: 'Edit'},
// 	{rnId: '1011', cohortDate: '1/1/2013', firstName: 'Nacy', lastName: 'Holms', unit: 'Medical/Surgical ICU Inpatient Unit', leave: 'No', terminate: 'Yes', mode: 'Edit'},
// ];