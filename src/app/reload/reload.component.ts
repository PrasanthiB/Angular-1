import { Component } from '@angular/core';
import { RefreshService } from '../refresh.service';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.css']
})
export class ReloadComponent {

  public reload:string = ""

  constructor(private _refreshService:RefreshService){
    _refreshService.getReloadPage().subscribe(
      (data:any)=>{
        this.reload = data
        console.log(data)
      },
      (err:any)=>{
        alert("page not reloaded")
      }
    )
  }

  refresh(){
    this._refreshService.getReloadPage().subscribe(
      (data:any)=>{
        this.reload = data;
        console.log(data)
      },
      (err:any)=>{
        alert("reload failed")
      }
    )
  }

}
