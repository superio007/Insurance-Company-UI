import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { addFIR } from 'src/app/user-dashboard/addfir';
import { AddFIRData } from '../addfirdata';
import { FirdataserviceService } from '../firdataservice.service';

@Component({
  selector: 'app-showfirdata',
  templateUrl: './showfirdata.component.html',
  styleUrls: ['./showfirdata.component.css']
})
export class ShowfirdataComponent implements OnInit {


  FIRData: AddFIRData[] =[];
  displayedColumns: string[] = ['name','email','phone','address','complaint','status','remark','edit'];
  dataSource: MatTableDataSource<AddFIRData> = new MatTableDataSource<AddFIRData>();
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
        this.dataSource = new MatTableDataSource<AddFIRData>(this.FIRData);

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
