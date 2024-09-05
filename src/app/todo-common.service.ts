import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoCommonService {

  //create subject
  private textSubject:BehaviorSubject<string>= new BehaviorSubject("")
  private timeSubject:BehaviorSubject<number> = new BehaviorSubject(0)

  constructor() { }

  //set value for text
  setText(textvalue:string){
    this.textSubject.next(textvalue)
  }

  //get value for text
  getText(){
   return this.textSubject
  }

  //set value for date
  setTime(timevalue:number){
    this.timeSubject.next(timevalue)
  }

  getTime(){
   return this.timeSubject
  }
}
