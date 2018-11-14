import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NotificationService } from './notification.service';

import * as firebase from 'firebase';

@Injectable({
   providedIn: 'root'
})
export class AuthService {

   constructor(
      public afAuth: AngularFireAuth,
      public notificationService: NotificationService,
   ) { }

   // S'enregistrer
   doRegister(value)
   {
      return new Promise<any>((resolve, reject) => {
         firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
            .then(res => {
               resolve(res);
            }, err => reject(err))
         })
      }

   // Se connecter
   doLogin(value)
   {
      return new Promise<any> ((resolve, reject)=> {
         firebase.auth().signInWithEmailAndPassword(value.email, value.password)
            .then(res => {
               this.notificationService.update('Welcome back!', 'success');
               resolve(res);
            }, err => reject(err))
      })
   }



}
