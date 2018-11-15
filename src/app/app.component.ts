import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})

export class AppComponent {

   // @var
   title: string;

   constructor( public authService: AuthService)
   {
      this.title = "Angular - Firebase";
   }

   logout(): void
   {
      this.authService.logOut();
   }

}
