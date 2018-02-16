import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DataService } from '../../services/data.service'
import { SharedService } from '../../services/shared.service';
import { rnInfo } from '../../models/rnInfo.model'
@Component({
  selector: 'app-manage-residents',
  templateUrl: './manage-residents.component.html',
  styleUrls: ['./manage-residents.component.scss']
})
export class ManageResidentsComponent implements OnInit {
	orgId: number;
	pageText: string;
	constructor(private dataService: DataService, private sharedService: SharedService) {

		sharedService.orgId$.subscribe(orgId => {
			this.dataService.GetRNData(orgId).subscribe(data => {
				this.dataSource =  new MatTableDataSource(JSON.parse(data));
				this.dataSource.sort = this.sort;
				this.dataSource.paginator = this.paginator;
			},
			error => console.log(error),
			() => console.log(this.dataSource));}); 
	}

	dataSource: MatTableDataSource<rnInfo> = new MatTableDataSource([]);

	displayedColumns = [
		'rnid', 
		'datehired', 
		'firstName',
		'lastName',
		'unittypedesc', 
		'ABSENT', 
		'Terminated', 
		'mode'];

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;

	ngOnInit() {
	}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
	}

}