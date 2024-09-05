import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent {

  public studentForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(10)]),
    class: new FormControl('',[Validators.required, Validators.min(1), Validators.max(10)]),
    fathername: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]),
    dob: new FormControl('',[Validators.required, Validators.pattern(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/)]),

    //Nested FormGroup
    address: new FormGroup({
      addressline: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required]),
      state: new FormControl('',[Validators.required]),
      pincode: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(6)])
    }),

    type: new FormControl(),
    busfee:new FormControl('',[Validators.required]),
    hostelfee: new FormControl('',[Validators.required]),

    //FormArray object declaration
    studentcards: new FormArray([])
  })

  // FormArray convertion using "as FormArray"
  get studentFormArray(){
    return this.studentForm.get('studentcards') as FormArray;
  }  

  addStudentMarks(){
    this.studentFormArray.push(
      new FormGroup({
        class: new FormControl('',[Validators.required, Validators.min(1), Validators.max(10)]),
        year: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
        percentage: new FormControl('',[Validators.required, Validators.min(1), Validators.max(100)])
      })
    )
  }

  delete(i:number){
    this.studentFormArray.removeAt(i);
  }

  constructor() {
    this.studentForm.get('type')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'dayScholar') {
          this.studentForm.addControl('busfee', new FormControl());
          this.studentForm.removeControl('hostelfee');
        }
        else if(data = 'residential'){
          this.studentForm.addControl('hostelfee', new FormControl());
          this.studentForm.removeControl('busfee');
        }
      }
    )
  }


  create(){
    console.log(this.studentForm)
  }
  
}
