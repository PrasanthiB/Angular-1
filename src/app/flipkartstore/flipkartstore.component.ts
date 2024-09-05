import { Component } from '@angular/core';
import { FlipkartstoresService } from '../flipkartstores.service';

@Component({
  selector: 'app-flipkartstore',
  templateUrl: './flipkartstore.component.html',
  styleUrls: ['./flipkartstore.component.css']
})
export class FlipkartstoreComponent {

  
  public products:any = [];
  public products1:any = [];
  
  constructor(private _flipkartstoresService:FlipkartstoresService){
    -_flipkartstoresService.getproduct().subscribe(
      (data:any)=>{
        this.products = data;
        console.log(data)
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

}
