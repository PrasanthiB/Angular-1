import { Component } from '@angular/core';
import { GmailService } from '../gmail.service';

@Component({
  selector: 'app-gmails',
  templateUrl: './gmails.component.html',
  styleUrls: ['./gmails.component.css']
})
export class GmailsComponent {

  public gmail:any = [];

  constructor(private _gmailService:GmailService){
    -_gmailService.getgmail().subscribe(
      (data:any)=>{
        this.gmail = data;
      },
      (err:any)=>{
        alert("Internet server error")
      }
    )
  }

}
