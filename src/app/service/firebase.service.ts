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
   addItems(valeur:string): void
   {
      const id       = this.db.createId();
      const project  = { key: id,description: valeur, completer: false };
      this.collectionRef.doc(id).set(project);
      //this.collectionRef.add({ key: id, description: valeur, completer: false })
   }

   // Function suppression d'un item à la collection todo
   deleteItems(key:string): void
   {
      this.collectionRef.doc(key).delete();
   }

   // Function Update d'un item à la collection todo
   updateItems(updateDesc:string, key:string): void
   {
      this.collectionRef.doc(key).update({description:updateDesc});
   }
}
