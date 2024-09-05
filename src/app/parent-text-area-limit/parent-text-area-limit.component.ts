import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-text-area-limit',
  templateUrl: './parent-text-area-limit.component.html',
  styleUrls: ['./parent-text-area-limit.component.css']
})
export class ParentTextAreaLimitComponent {
onTextChange($event: any) {
throw new Error('Method not implemented.');
}

  @Input() maxlength:number = 50;
  text: string = '';


  ontextchange(count:string){
    if(count.length > this.maxlength){
      this.text=count.substring(0, this.maxlength)
    }else{
      this.text = count;
    }
  }


}
