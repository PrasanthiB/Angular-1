import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  //create subject
  private countSubject:BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }

  //set value
  setCount(value:number){
    this.countSubject.next(value);
  }

  //get value
  getCount(){
    return this.countSubject;
  }

  //CartCount
  private cartCount=0
  private cartCountSubject:BehaviorSubject<number> = new BehaviorSubject(this.cartCount)

  addtoCart(){
    this.cartCount++;
    this.cartCountSubject.next(this.cartCount);
  }

  getCartCount(){
   return this.cartCountSubject;
  }

  //Item Count
  private itemCount=0
  private itemCountSubject:BehaviorSubject<number> = new BehaviorSubject(this.cartCount)

  addtoItem(){
    this.itemCount++;
    this.itemCountSubject.next(this.itemCount);
  }

  getItemCount(){
   return this.itemCountSubject;
  }
}
