import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';

@Injectable({
   providedIn: 'root'
})
export class AuthService {

   constructor( public afAuth: AngularFireAuth ) { }


   doRegister(value){
      return new Promise<any>((resolve, reject) => {
         firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
            .then(res => {
               resolve(res);
            }, err => reject(err))
         })
      }



}