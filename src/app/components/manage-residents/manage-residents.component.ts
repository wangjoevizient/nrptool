import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../../services/data.service'
import { SharedService } from '../../services/shared.service';
import { rnInfo } from '../../models/rnInfo.model';
import { EditColumnsComponent } from '../edit-columns/edit-columns.component'
import { columnSetting } from '../../models/columnSetting';
import { ExportToCSV } from "@molteni/export-csv";
@Component({
  selector: 'app-manage-residents',
  templateUrl: './manage-residents.component.html',
  styleUrls: ['./manage-residents.component.scss']
})
export class ManageResidentsComponent implements OnInit {
	orgId: number;
	pageText: string;
	showColumns: columnSetting;

	constructor(private dataService: DataService, 
		private sharedService: SharedService,
		private dialog: MatDialog ) {

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

	displayedColumns = [];

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;

	ngOnInit() {
		this.showColumns = JSON.parse(localStorage.getItem('showColumns'));
		if(this.showColumns == null) {
			this.showColumns = new columnSetting();
			this.showColumns.rnId = true;
			this.showColumns.cohortDate = true;
			this.showColumns.firstName = true;
			this.showColumns.lastName = true;
			this.showColumns.typeOfUnit = true; 
			this.showColumns.leave = true;
			this.showColumns.termination = true;
			localStorage.setItem('showColumns', JSON.stringify(this.showColumns));
		};
		this.displayedColumns = Object.keys(this.showColumns).filter(k => this.showColumns[k] == true).map( c => c );
		console.log(this.displayedColumns);
	}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
	}

	openEditColumns(): void {
    let dialogRef = this.dialog.open(EditColumnsComponent, {
      // width: 'auto',
      // data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
			this.displayedColumns = Object.keys(result).filter(k => result[k] == true).map( c => c );
			console.log(this.displayedColumns)
		});
	}
	
	exportCSV(): void {
		let exporter = new ExportToCSV();
		exporter.exportColumnsToCSV(this.dataSource.data, "cohort.csv", this.displayedColumns)
	}


}