import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-items-component',
  templateUrl: './items-component.component.html',
  styleUrls: ['./items-component.component.css']
})
export class ItemsComponentComponent {

  public count:number = 0
  
  constructor(private _commonService:CommonService){}

  countChange(){
    this._commonService.setCount(this.count)
  }

  add(){
    this._commonService.addtoItem();
  }

}
