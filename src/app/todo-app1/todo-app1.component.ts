import { Component } from '@angular/core';
import { TodoCommonService } from '../todo-common.service';

@Component({
  selector: 'app-todo-app1',
  templateUrl: './todo-app1.component.html',
  styleUrls: ['./todo-app1.component.css']
})
export class TodoApp1Component {

  public textArea:string=""
  constructor(private _todoCommonService:TodoCommonService){
    
  }

  textAreaDisplay(){
  this._todoCommonService.setText(this.textArea)
  }

  create(){
    this._todoCommonService.getText();
  }

  reset(){

  }
  
  

}
