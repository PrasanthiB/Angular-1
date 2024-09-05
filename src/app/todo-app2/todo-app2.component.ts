import { Component } from '@angular/core';
import { TodoCommonService } from '../todo-common.service';

@Component({
  selector: 'app-todo-app2',
  templateUrl: './todo-app2.component.html',
  styleUrls: ['./todo-app2.component.css']
})
export class TodoApp2Component {
  public textArea:string ="";
  public date:number = 0;

  constructor(private _todoCommonService:TodoCommonService){
    _todoCommonService.getText().subscribe(
      (data:any)=>{
        this.textArea = data;
      }
    )

    _todoCommonService.getTime().subscribe(
      (data:any)=>{
        this.date = data
      }
    )
  }
}
