import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';


@Injectable({
   providedIn: 'root'
})
export class GuardService {

   constructor(
     private authService: AuthService,
     private router: Router,
     private notificationService: NotificationService,
   ) { }


}
