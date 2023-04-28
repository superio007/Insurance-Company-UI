import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { addFIR } from 'src/app/user-dashboard/addfir';
import { FirserviceService } from 'src/app/user-dashboard/firservice.service';

@Component({
  selector: 'app-firdata',
  templateUrl: './firdata.component.html',
  styleUrls: ['./firdata.component.css']
})
export class FirdataComponent implements OnInit {

  FIRData: addFIR[] =[];
  displayedColumns: string[] = ['name','email','phone','address','complaint','edit'];
  dataSource: MatTableDataSource<addFIR> = new MatTableDataSource<addFIR>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filerString = '';

  constructor(private firservice: FirserviceService) { }

  ngOnInit(): void {
    this.firservice.getFIR()
    .subscribe(
      (successResponse) =>{
        console.log(successResponse);
        this.FIRData = successResponse;
        this.dataSource = new MatTableDataSource<addFIR>(this.FIRData);

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
