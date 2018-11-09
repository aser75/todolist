import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

/*
* Service
*/
import { FirebaseService } from '../service/firebase.service';

/*
* Interface
*/
import { Liste } from '../interface/liste';

@Component({
   selector: 'app-todolist',
   templateUrl: './todolist.component.html',
   styleUrls: ['./todolist.component.styl']
})

export class TodolistComponent implements OnInit {


   // @var
   items: Observable<Liste[]>;
   @Input() item: Liste;
   selectedItem: string = "";


   constructor( private firebaseService: FirebaseService )
   {}

   ngOnInit()
   {
      this.items = this.getFirebase();
   }

   // function obtenir la collection todo via le service
   getFirebase(): Observable<Liste[]>
   {
      return this.firebaseService.getItems();
   }

   // function add item sur la collection todo via le service
   addItem(valeur:string): void
   {
      this.firebaseService.addItems(valeur);
   }

   // function delete item sur la collection todo via le service
   deleteItems(key:string): void
   {
      this.firebaseService.deleteItems(key);
   }

   // function update item sur la collection todo via le service
   updateItems(updateDesc:string, key:string): void
   {
      this.selectedItem = '';
      this.firebaseService.updateItems(updateDesc, key);
   }

   // function show input
   show(i:number): void {
      this.selectedItem = 'item'+i;
   }

   updateCompleted( completer, key ): void
   {
      this.firebaseService.updateCompleted(completer, key);
   }

}
