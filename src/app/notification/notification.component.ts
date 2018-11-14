import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../service/notification.service';

@Component({
   selector: 'app-notification',
   templateUrl: './notification.component.html',
   styleUrls: ['./notification.component.styl']
})

export class NotificationComponent implements OnInit {

   public msg: string;

   constructor( private notificationService: NotificationService )
   {}

   ngOnInit()
   {}

}
