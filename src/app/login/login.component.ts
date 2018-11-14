import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../service/auth.service'

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.styl'],
   providers: [AuthService],
})

export class LoginComponent implements OnInit {

   errorMessage: any;
   successMessage: any;

   constructor(private authService: AuthService ) { }

   ngOnInit()
   {}

   loginForm = new FormGroup({
         email: new FormControl(''),
         password: new FormControl(''),
   });

   trySign(value)
   {
      this.authService.doLogin( value )
      .then(res => {
         console.log(res);
         this.errorMessage = "";
         this.successMessage = "A mettre commentaire";
      }, err => {
         console.log(err);
         this.errorMessage = err.message;
         this.successMessage = "";
      })
   }

}
