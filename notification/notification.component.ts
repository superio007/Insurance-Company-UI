import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddFIRData } from '../admin/addfirdata';
import { FIRData } from '../admin/firdata';
import { FirdataserviceService } from '../admin/firdataservice.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  FIRData: FIRData[] =[];
  displayedColumns: string[] = ['name','email','phone','address','complaint','status','remark'];
  dataSource: MatTableDataSource<FIRData> = new MatTableDataSource<FIRData>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filerString = '';

  constructor(private firservice: FirdataserviceService) { }

  ngOnInit(): void {
    this.firservice.getFIR()
    .subscribe(
      (successResponse) =>{
        console.log(successResponse);
        this.FIRData = successResponse;
        this.dataSource = new MatTableDataSource<FIRData>(this.FIRData);

        if (this.matPaginator) {
          this.dataSource.paginator = this.matPaginator;
        }

        if (this.matSort) {
          this.dataSource.sort = this.matSort;
        }

      }
    );
  } 

  filterFIR() {
    this.dataSource.filter = this.filerString.trim().toLowerCase();
  }

}
