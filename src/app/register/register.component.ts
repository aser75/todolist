import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../service/auth.service'

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
