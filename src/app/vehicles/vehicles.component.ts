import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  public vehicles:any = [];
  public term:string = "";
  public column:string = "";
  public order:string = "";
  public page:number = 0;
  public limit:number= 0;


  // all - get method
  constructor(private _vehicleService:VehicleService, private _router:Router){
    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
          this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  //filter - get filter method
  filter(){
    this._vehicleService.getfilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internet server error");
      }
    )
  }

  //sort - get sort method
  sort(){
    this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internet server error");
      }
    )
  }

  //pagination - get limit & page method
  pagination(){
    this._vehicleService.getPaginatedVehicles(this.page,this.limit).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internet server error");
      }
    )
  }

//delete - delete method
  delete(id:string){
    this._vehicleService.deleteVehicles(id).subscribe(
      (data:any)=>{
        alert("successfully deleted....");
        location.reload();
      },
      (err:any)=>{
        alert("deletionn failed");
      }
    )
  }

view(id:string){
  this._router.navigateByUrl("/dashboard/viewVehicle/"+id)
}

edit(id:string){
  this._router.navigateByUrl("/dashboard/edit-vehicle/"+id)
}
}
