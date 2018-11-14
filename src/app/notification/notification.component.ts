import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-notification',
   templateUrl: './notification.component.html',
   styleUrls: ['./notification.component.styl']
})

export class NotificationComponent implements OnInit {

   public msg: string;

   constructor()
   {
      this.msg = "test notification";
   }

   ngOnInit()
   {}

}
