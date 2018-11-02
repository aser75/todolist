import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.styl']
})
export class TodolistComponent implements OnInit {

    // @var
    model: any;
    items: Observable<any[]>;
    // Fin @var

    constructor( db: AngularFirestore )
    {
        this.model =
        {
            name: "",
        };
        this.items = db.collection('todo').valueChanges();
    }

    ngOnInit()
    {}

}
