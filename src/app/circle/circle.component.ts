import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {

  public radius : number = 0;
  public value:number = 0;
  public pi:number = 3.14159;

  area(){
    this.value = this.pi* this.radius*this.radius
  }

  perimeter(){
    this.value = 2*this.pi*this.radius
  }

}
