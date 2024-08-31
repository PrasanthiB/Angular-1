import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  public length:number = 0;
  public breath:number = 0;
  public value:number = 0;

  area(){
    this.value = this.length*this.breath
  }
  perimeter(){
    this.value = 2 * (this.length + this.breath)
  }
  
}

