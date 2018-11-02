import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../service/firebase.service';

@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.styl']
})

export class TodolistComponent implements OnInit {

    // @var
    model: any;
    // Fin @var

    constructor()
    {
        this.model =
        {
            name: "",
        };
    }

    ngOnInit()
    {}

}
