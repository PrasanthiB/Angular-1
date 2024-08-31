import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public id:string = "";

//new formgroup and formcontrol creation
  public vehicleForm:FormGroup = new FormGroup({
      Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      color: new FormControl(),
      image: new FormControl(),
      cost: new FormControl()
    })

    constructor(private _vehicleService:VehicleService, private _activatedRoute:ActivatedRoute, private _router:Router){
      _activatedRoute.params.subscribe(
        (data:any)=>{
          console.log(data.id);
          this.id =  data.id

          _vehicleService.getVehicle(data.id).subscribe(
            (data:any)=>{
              this.vehicleForm.patchValue(data);
            }
          )
        }
      )
    }

    //create - post method
    create(){
      console.log(this.vehicleForm.value);

      if(this.id){
        //edit
        this._vehicleService.updateVehicles(this.vehicleForm.value,this.id).subscribe(
          (data:any)=>{
            alert("Updated Successfully..")
            this.vehicleForm.reset();
            this._router.navigateByUrl("/dashboard/vehicles")
          },
          (err:any)=>{
            alert("Data updation failed")
          }
        )
      }else{

        //create
        this._vehicleService.createVehicles(this.vehicleForm.value).subscribe(
          (data:any)=>{
            alert("Created Successfully..")
            this.vehicleForm.reset();
          },
          (err:any)=>{
            alert("Data creation failed")
          }
        )
      }
     
    }

    
}
