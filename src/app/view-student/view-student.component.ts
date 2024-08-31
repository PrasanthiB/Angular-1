import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsIdService } from '../students-id.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
  public viewstudent:any = {};

  constructor(private _activateRoute:ActivatedRoute, private _studentIdService:StudentsIdService){
    _activateRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);

        _studentIdService.getstudentid(data.id).subscribe(
          (data:any)=>{
            this.viewstudent = data;
          }
        )
      }
    )

  }
}
