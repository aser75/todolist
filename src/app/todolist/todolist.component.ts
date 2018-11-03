import { Component, OnInit } from '@angular/core';
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
   model: any;
   items: Observable<Liste[]>;

   constructor( private firebaseService: FirebaseService )
   {
      this.model =
      {
      name: "",
      };
   }

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
   addItem(): void
   {
      this.firebaseService.addItems();
   }


}
