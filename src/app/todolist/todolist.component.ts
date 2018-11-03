import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../service/firebase.service';

import { Liste } from '../interface/liste';



@Component({
   selector: 'app-todolist',
   templateUrl: './todolist.component.html',
   styleUrls: ['./todolist.component.styl']
})

export class TodolistComponent implements OnInit {

   // @var
   model: any;
   shares: Observable<Liste[]>;
   // Fin @var

   constructor( private firebaseService: FirebaseService)
   {
      this.model =
      {
      name: "",
      };
   }

   ngOnInit()
   {
      this.shares = this.getFirebase();
   }

   getFirebase(): Observable<Liste[]>
   {
      return this.firebaseService.getItems();
   }

}
