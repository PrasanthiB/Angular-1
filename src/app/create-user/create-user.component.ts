import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
    age: new FormControl('',[Validators.required,Validators.min(18),Validators.max(60)]),
    phone: new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    address: new FormGroup({
      state: new FormControl('',[Validators.required]),
      pincode: new FormControl('',[Validators.required])
    }),
    type: new FormControl(),
    busfee: new FormControl('',[Validators.required]),
    hostelfee: new FormControl('', [Validators.required]),

    // create an object
    cards: new FormArray([])
  })

  // convert created object into array
  get cardsFormArray(){
   return this.userForm.get('cards') as FormArray;
  }

  // push -> to create newForm at every press of addcard button
  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl('',[Validators.required, Validators.pattern('^[0-9]{16}$')]),
        expiry: new FormControl('',[Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\\/\\d{2}$')]),
        cvv: new FormControl('',[Validators.required, Validators.pattern('^[0-9]{3,4}$')])
      })
    )
  }

  delete(i:number){
    this.cardsFormArray.removeAt(i);
  }

  constructor() {
    this.userForm.get('type')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'dayScholar') {
          this.userForm.addControl('busfee', new FormControl());
          this.userForm.removeControl('hostelfee');
        }
        else if(data = 'residential'){
          this.userForm.addControl('hostelfee', new FormControl());
          this.userForm.removeControl('busfee');
        }
      }
    )
  }

  submit() {
    console.log(this.userForm);
  }

}
