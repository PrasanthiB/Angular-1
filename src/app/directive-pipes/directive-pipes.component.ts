import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-pipes',
  templateUrl: './directive-pipes.component.html',
  styleUrls: ['./directive-pipes.component.css']
})
export class DirectivePipesComponent {

  public ages:number[] = [10,20,30,40,50];

  public states:string[] = ["Andhra","telangana","karnataka","tamil nadu","kerala"]

  public users:any = [
    {name:'a', age:17, phone:155216,marks:30}, 
    {name:'b', age:30, phone:155216,marks:50},
    {name:'c', age:15, phone:155216,marks:74},
    {name:'d', age:50, phone:155216,marks:65},

  ]

  public today:any = new Date();

}
