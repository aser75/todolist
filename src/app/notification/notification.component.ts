import { Component, OnInit } from '@angular/core';

import { GuardService } from '../service/guard.service';

@Component({
   selector: 'app-notification',
   templateUrl: './notification.component.html',
   styleUrls: ['./notification.component.styl']
})

export class NotificationComponent implements OnInit {

   public msg: string;

   constructor( private guardService: GuardService )
   {
      this.msg = "test notification";
   }

   ngOnInit()
   {}

}
