import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsIdService } from '../students-id.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  public id:string ="";

  public studentForm: FormGroup = new FormGroup({
    school_logo : new FormControl(),
    school_name : new FormControl(),
    name: new FormControl(),
    dob: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    email: new FormControl(),
    profile_picture: new FormControl(),
    school_city: new FormControl(),
    school_pin: new FormControl()
  })

  constructor(private _studentsIdService: StudentsIdService, private _activatedRoute:ActivatedRoute, private _router:Router) { 

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id = data.id;

        _studentsIdService.getstudentid(data.id).subscribe(
          (data:any)=>{
            this.studentForm.patchValue(data);
          }
        )
      }
    )
  }

  create() {
    console.log(this.studentForm);

    if(this.id){

      //edit
      this._studentsIdService.updateStudentid(this.studentForm.value,this.id).subscribe(
        (data:any)=>{
          alert("Updated Successfully.........")
          this.studentForm.reset()
          this._router.navigateByUrl("/dashboard/student-id")
        },
        (err:any)=>{
          alert("updation failed")
        }
      )

    }else{
      //create

      this._studentsIdService.createStudentid(this.studentForm.value).subscribe(
        (data: any) => {
          alert("data created successfully.....")
          this.studentForm.reset();
        },
        (err: any) => {
          alert("not created");
        }
      )
    }
  }
}
