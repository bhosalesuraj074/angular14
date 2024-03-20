import { Injectable } from '@angular/core';
import { Subject , BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
// create a subject to broadcast enter user name 
// userName = new Subject<any>(); 

userName = new BehaviorSubject("Bill gates came to india")
 constructor() { }
}
