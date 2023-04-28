import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { addcontact } from '../addcontact';
import { contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  id: number | undefined | null | string;
  contactus:contact = {
    id:0,
    name:'',
    email:'',
    inquiry: ''
  }

  contactform = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z_-]*')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    inquiry: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z_-]*')]),
  })

  constructor(private ContactService:ContactService,
    private http: HttpClient, private snackbar: MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  contact(): void{
    this.ContactService.savecontact(this.contactus).subscribe(
      (successResponse) =>{
        console.log(successResponse);

        //show a notification
        this.snackbar.open('Your Contact us form has been submitted successfully!', undefined,{
          duration:2000
        });
        setTimeout(() => {
          this.router.navigateByUrl('/home');
        }, 2000);
      }
    )
    
  }

  get f(){
    return this.contactform.controls;
  }

}
