import { Component } from '@angular/core';
import { StudentsIdService } from '../students-id.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-id',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.css']
})
export class StudentIdComponent {

  public students:any = [];
  public term:string = "";
  public column:string = "";
  public order:string = "";
  public page:number = 0;
  public limit:number= 0;

  // all - get all data
  constructor(private _studentsIdService:StudentsIdService, private _router:Router){
    _studentsIdService.studentid().subscribe(
      (data:any)=>{
        this.students = data;
        console.log(data)
      },
      (err:any)=>{
        alert("Server Error")
      }
    )
  }

  // filter data
  filter(){
    this._studentsIdService.filteredStudentid(this.term).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("server error");
      }
    )
  }

  // sort data
  sort(){
    this._studentsIdService.sortedStudentid(this.column,this.order).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("server error")
      }
    )
  }

  // delete
  delete(id:string){
    this._studentsIdService.deleteStudentid(id).subscribe(
      (data:any)=>{
        alert("deleted successfully....")
        location.reload();
      },
      (err:any)=>{
        alert("deletion failed")
      }
    )
  }

     //pagination - get limit & page method
     pages(){
    this._studentsIdService.getPaginatedStudents(this.page,this.limit).subscribe(
      (data:any)=>{
        this.students = data;
        console.log(data)
      },
      (err:any)=>{
        alert("internet server error");
      }
    )
  }

  view(id:string){
    this._router.navigateByUrl("/dashboard/view-student/"+id)
  }

  edit(id:string){
    this._router.navigateByUrl("/dashboard/edit-student/"+id)
  }

}
