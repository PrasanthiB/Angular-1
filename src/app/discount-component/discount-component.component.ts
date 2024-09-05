import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-discount-component',
  templateUrl: './discount-component.component.html',
  styleUrls: ['./discount-component.component.css']
})
export class DiscountComponentComponent {

  public count:number = 0
  
  constructor(private _commonService:CommonService){
    
    _commonService.getItemCount().subscribe(
      (data:any)=>{
        this.count = data
      }
    )
  }

}
