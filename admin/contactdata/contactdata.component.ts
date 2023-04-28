import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { contact } from 'src/app/contactus/contact';
import { ContactService } from 'src/app/contactus/contact.service';

@Component({
  selector: 'app-contactdata',
  templateUrl: './contactdata.component.html',
  styleUrls: ['./contactdata.component.css']
})
export class ContactdataComponent implements OnInit {

  ContactData: contact[] =[];
  displayedColumns: string[] = ['name','email','inquiry'];
  dataSource: MatTableDataSource<contact> = new MatTableDataSource<contact>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filerString = '';

  constructor(private contactservice: ContactService) { }

  ngOnInit(): void {
    this.contactservice.getAll()
    .subscribe(
      (successResponse) =>{
        console.log(successResponse);
        this.ContactData = successResponse;
        this.dataSource = new MatTableDataSource<contact>(this.ContactData);

        if (this.matPaginator) {
          this.dataSource.paginator = this.matPaginator;
        }

        if (this.matSort) {
          this.dataSource.sort = this.matSort;
        }

      }
    );
  } 


  filterContact() {
    this.dataSource.filter = this.filerString.trim().toLowerCase();
  }


}
