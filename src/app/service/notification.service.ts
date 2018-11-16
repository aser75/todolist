import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Msg } from '../interface/message';


@Injectable({
   providedIn: 'root'
})
export class NotificationService {

   constructor()
   {}

   private _msgSource = new Subject<Msg | null>();
   msg = this._msgSource.asObservable();

   update(content: string, style: 'error' | 'info' | 'success')
   {
      const msg: Msg = { content, style };
      this._msgSource.next(msg);
   }

   clear()
   {
      this._msgSource.next(null);
   }
}
