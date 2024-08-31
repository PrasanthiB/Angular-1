import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';


  public age:number = 20;
  public name:string = "abc"
  public isIndian:boolean = true;

  public isValid:boolean = false;
  public url:string ="/assets/404.png";

  public phone:string = "+91 ";

  submit(){
    alert("submitted.......");
  }

  typing(){
    alert("typing.....");
  }
}
