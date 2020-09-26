import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  public isVisible: BehaviorSubject<boolean>;

  constructor() { 
    this.isVisible = new BehaviorSubject(false);
   }
}
