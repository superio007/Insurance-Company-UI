import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FIR } from '../fir';
import { FirserviceService } from '../firservice.service';

@Component({
  selector: 'app-editfir',
  templateUrl: './editfir.component.html',
  styleUrls: ['./editfir.component.css']
})
export class EditfirComponent {

  id: number | undefined | null | string;
  firdata: FIR = {
    id: 0,
    name:'',
    email:'',
    phone:'',
    address:'',
    complaint:''
  }

  constructor(private readonly firservice: FirserviceService,
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
                this.firdata = successResponse;
                console.log(successResponse);
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
           this.snackbar.open('Your Fir complaint has been updated successfully!', undefined,{
            duration:2000
          });
          setTimeout(() => {
            this.router.navigateByUrl('/editfir');
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
           this.snackbar.open('Your fir complaint has been deleted successfully!', undefined,{
            duration:2000
          });
          setTimeout(() => {
            this.router.navigateByUrl('/editfir');
          }, 2000);
  
        }
      )
    }

}
