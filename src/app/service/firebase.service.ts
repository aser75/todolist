import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
* Interface
*/
import { Liste } from '../interface/liste';

/*
* Module
*/
import {
         AngularFirestore,
         AngularFirestoreCollection  } from '@angular/fire/firestore';

@Injectable({
   providedIn: 'root'
})

export class FirebaseService {


   // @var
   collectionRef: AngularFirestoreCollection<Liste>;
   getTodo: Observable<Liste[]>;

   constructor(private db: AngularFirestore)
   {
      this.collectionRef = this.db.collection('todo');
   }

   // Function obtenir les items de la collection todo
   getItems(): Observable<Liste[]>
   {
      this.getTodo = this.collectionRef.valueChanges();
      return this.getTodo;
   }

   // Function ajout d'item à la collection todo
   addItems():void
   {
      this.collectionRef.add({ description: "items 3 push", completer: false })
   }


}
