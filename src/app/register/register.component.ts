import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.styl'],
   providers: [AuthService],
})
export class RegisterComponent implements OnInit {

   errorMessage: any;
   successMessage: any;

   constructor( private authService: AuthService ) { }

   ngOnInit()
   {}

   registerForm = new FormGroup({
         email: new FormControl(''),
         password: new FormControl(''),
   });

   tryRegister(value){
     this.authService.doRegister(value)
     .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Your account has been created";
     }, err => {
       console.log(err);
       this.errorMessage = err.message;
       this.successMessage = "";
     })
   }

}
