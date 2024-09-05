import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent {

  public count:number = 0
  constructor(private _commonService:CommonService){

    _commonService.getItemCount().subscribe(
      (data:any)=>{
        this.count = data;
      }
    )
    
  }

}
