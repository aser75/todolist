import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})

export class AppComponent {

    // @var
    title: string;
    // Fin @var

    constructor()
    {
        this.title = "My todolist";
    }

}
