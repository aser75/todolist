import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NotificationService } from './notification.service';
import { User } from '../interface/user';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  AngularFirestore,
} from '@angular/fire/firestore';

@Injectable({
   providedIn: 'root'
})
export class AuthService {

   user$: Observable< User | null | boolean>;

   constructor(
      private afAuth: AngularFireAuth,
      private notificationService: NotificationService,
      private afs: AngularFirestore,
   ) {
      this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
         if (user) {
            console.log("connecter " + user);
            return of(true);
         } else {
            console.log("pas connecter " +user);
            return of(false);
         }
      })
      );
   }

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

   logOut()
   {
      this.afAuth.auth.signOut();
   }



}
