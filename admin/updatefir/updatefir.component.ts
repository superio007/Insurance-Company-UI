import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AddFIRData } from '../addfirdata';
import { FirdataserviceService } from '../firdataservice.service';

@Component({
  selector: 'app-updatefir',
  templateUrl: './updatefir.component.html',
  styleUrls: ['./updatefir.component.css']
})
export class UpdatefirComponent {

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
            this.firservice.getFIRbyid(this.id)
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

    onUpdate(): void{
      this.firservice.updateFIR(this.firdata.id, this.firdata)
      .subscribe(
        (successResposponse) => {
          console.log(successResposponse);
  
           //show a notification
           this.snackbar.open('Your data has been updated successfully!', undefined,{
            duration:2000
          });
          setTimeout(() => {
            this.router.navigateByUrl('/showfirdata');
          }, 2000);
  
        }
      )
    }
  
    onDelete(): void{
      this.firservice.deleteFIR(this.firdata.id)
      .subscribe(
        (successResponse) =>{
          console.log(successResponse);
  
           //show a notification
           this.snackbar.open('Your data has been deleted successfully!', undefined,{
            duration:2000
          });
          setTimeout(() => {
            this.router.navigateByUrl('/showfirdata');
          }, 2000);
  
        }
      )
    }
 

}
