import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
   providedIn: 'root'
})

export class FirebaseService {

   // @var
   items: Observable<any[]>;
   db: any;
   // Fin @var


   constructor(db: AngularFirestore)
   {}

   getItems()
   {
      this.items = this.db.collection('todo').valueChanges();
   }

}
