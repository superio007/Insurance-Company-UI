import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { admin } from 'src/app/admin/admin';
import { AdminserviceService } from 'src/app/admin/adminservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit{

  Admin:admin = {
    username: '',
    password: ''
  }

  loginform = new FormGroup({
    username: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z_-]*')]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private AdminService:UserserviceService,
    private http: HttpClient, private snackbar: MatSnackBar, private router:Router) { }

  ngOnInit(): void {
    
  }

  login() {
    this.AdminService.getlogin().subscribe(
      (successResponse) => {
        const user = successResponse.find((a:any) => {
          return a.username === this.loginform.value.username && a.password === this.loginform.value.password
        }) 
        if(user){
          this.snackbar.open('Welcome to your user dashboard!', undefined,{
            duration:2000
          });
          setTimeout(() => {
            this.router.navigateByUrl('/registeration');
          }, 2000);
        } else {
          this.snackbar.open('User data is not found!', undefined, {
            duration:2000
          });
        } 
      }, (errorResponse) =>{
        this.snackbar.open('Something went wrong!', undefined, {
          duration:2000
        });
      }
    )
  }

  get f(){
    return this.loginform.controls;
  }

}
