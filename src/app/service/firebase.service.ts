import { Injectable } from '@angular/core';
import { Liste } from '../interface/liste';
import {
   AngularFirestore,
   AngularFirestoreDocument,
   AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
   providedIn: 'root'
})

export class FirebaseService {

   // @var
   collectionRef: AngularFirestoreCollection<Liste>;
   getTodo: Observable<Liste[]>
   // Fin @var


   constructor(private db: AngularFirestore)
   {
      this.collectionRef = this.db.collection('todo');
   }

   getItems(): Observable<Liste[]>
   {
      this.getTodo = this.collectionRef.valueChanges();
      return this.getTodo;
   }


}
