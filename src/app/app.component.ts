import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})

export class AppComponent {


    // @var
    title: string;

    constructor()
    {
        this.title = "My todolist";
    }
    

}
