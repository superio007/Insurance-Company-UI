import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
import { signup } from '../signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  id: number | undefined | null | string;
  Signup:signup = {
    id:0,
    name:'',
    email:'',
    username: '',
    password: ''
  }

  signupform = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z_-]*')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z_-]*')]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private AdminService:AdminserviceService,
    private http: HttpClient, private snackbar: MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  signup(): void{
    this.AdminService.signup(this.Signup).subscribe(
      (successResponse) =>{
        console.log(successResponse);

        //show a notification
        this.snackbar.open('Your Admin Registration has been done successfully!', undefined,{
          duration:2000
        });
        setTimeout(() => {
          this.router.navigateByUrl('/admin-login');
        }, 2000);
      }
    )
    
  }

  get f(){
    return this.signupform.controls;
  }

}
