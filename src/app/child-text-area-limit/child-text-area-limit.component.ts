import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-text-area-limit',
  templateUrl: './child-text-area-limit.component.html',
  styleUrls: ['./child-text-area-limit.component.css']
})
export class ChildTextAreaLimitComponent {

 @Output() public sumValue: EventEmitter<number>=new EventEmitter()

}

