import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent {

  public count:number = 0
  public itemCount:number = 0
  
  constructor(private _commonService:CommonService){

    _commonService.getItemCount().subscribe(
      (data:any)=>{
        this.count = data;
      }
    )    
  }
}
