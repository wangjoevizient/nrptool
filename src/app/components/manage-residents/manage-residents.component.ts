import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DataService } from '../../services/data.service'
import { SharedService } from '../../services/shared.service';
import { rnInfo } from '../../models/rnInfo.model'
import { MatDialogModule,MatDialog } from '@angular/material';
import { ManageresidentFiltersComponent } from '../manageresident-filters/manageresident-filters.component';

@Component({
  selector: 'app-manage-residents',
  templateUrl: './manage-residents.component.html',
  styleUrls: ['./manage-residents.component.scss']
})
export class ManageResidentsComponent implements OnInit {
	orgId: number;
	pageText: string;
	dialogResult:any;
	constructor(private dialog:MatDialog, private dataService: DataService, private sharedService: SharedService) {

		sharedService.orgId$.subscribe(orgId => {
			this.dataService.GetRNData(orgId).subscribe(data => {
				this.dataSource =  new MatTableDataSource(JSON.parse(data));
				this.dataSource.sort = this.sort;
				this.dataSource.paginator = this.paginator;
			},
			error => console.log(error),
			() => console.log(this.dataSource));}); 
	}

	openDialog()
	{
		console.log("openDialog");
		this.sharedService.orgId$.subscribe(orgIddata => {this.orgId=orgIddata});
		let dialogRef= this.dialog.open(ManageresidentFiltersComponent,
		{
		   width:'800px',
		   data:this.orgId		   
		});

		dialogRef.afterClosed().subscribe(result =>{
			console.log(`Dialog closed: ${result}`);
			this.dialogResult=result;
			console.log(this.dialogResult);
		})
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