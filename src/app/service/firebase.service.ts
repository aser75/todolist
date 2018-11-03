import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
   providedIn: 'root'
})

export class FirebaseService {

   // @var
   private customer: Observable<any>
   // Fin @var


   constructor(private db: AngularFirestore)
   {}

   getItems(): Observable<any>
   {
      this.customer = this.db.collection('todo').valueChanges();
      return this.customer;
   }

}
