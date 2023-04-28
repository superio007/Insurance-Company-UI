import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { addFIR } from 'src/app/user-dashboard/addfir';
import { FIR } from 'src/app/user-dashboard/fir';
import { FirserviceService } from 'src/app/user-dashboard/firservice.service';
import { AddFIRData } from '../addfirdata';
import { FIRData } from '../firdata';
import { FirdataserviceService } from '../firdataservice.service';

@Component({
  selector: 'app-editfirdata',
  templateUrl: './editfirdata.component.html',
  styleUrls: ['./editfirdata.component.css']
})
export class EditfirdataComponent {

  id: number | undefined | null | string;
  firdata: AddFIRData = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
    complaint: '',
    remark: '',
    status: ''
  }

  constructor(private readonly firservice: FirdataserviceService,
    private readonly route:ActivatedRoute,
    private snackbar: MatSnackBar,
    private router:Router) { }

    ngOnInit(): void {
      this.route.paramMap.subscribe(
        (params) =>{
          this.id = params.get('id');
  
          if(this.id) {
            this.firservice.getregisteredFIRbyid(this.id)
            .subscribe(
              (successResponse) =>{
                console.log(successResponse);
                this.firdata = successResponse;
              }
            );
          }
        }
      );
    }

    add(): void{
      this.firservice.addFIR(this.firdata).subscribe(
        (successResponse) =>{
          console.log(successResponse);
  
          //show a notification
          this.snackbar.open('Your Registered Complaint has been added successfully!', undefined,{
            duration:1000
          });
          setTimeout(() => {
            this.router.navigateByUrl('/showfirdata');
          }, 1000);
        }
      )
    }

}
