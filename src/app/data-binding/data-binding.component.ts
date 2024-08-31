import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  public fullName:string='prasanthi'
  public age:number = 25
  public isIndian:boolean = true
  public isValid:boolean = false
  public url:string = ''

  public phone:string = "+91 "

  submit() {
    alert("submitted successfully!!!")
  }

  typing() {
    alert("typing....")
  }

}
