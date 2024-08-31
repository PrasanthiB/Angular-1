import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankaccountService } from '../bankaccount.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent {

  public id:string = "";

  public bankDetails: FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl()
  })

  constructor(private _bankaccountService: BankaccountService, private _activatedRoute:ActivatedRoute, private _router:Router) { 

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id = data.id;

        _bankaccountService.getBankAccount(data.id).subscribe(
          (data:any)=>{
            this.bankDetails.patchValue(data);
          }
        )
      }

      
    )
  }

  create() {

    console.log(this.bankDetails);

    if(this.id){
      //edit
      this._bankaccountService.updateBankDetails(this.bankDetails.value, this.id).subscribe(
        (data:any)=>{
          alert("updated successfully....");
          this.bankDetails.reset();
          this._router.navigateByUrl("/dashboard/bankaccounts");
        },
        (err:any)=>{
          alert("updation failed");
        }
      )

    }else{
      //create
      this._bankaccountService.createBankDetails(this.bankDetails.value).subscribe(
        (data: any) => {
          alert("created successfully.....")
          this.bankDetails.reset();
        },
        (err: any) => {
          alert("Creation failed")
        }
      )
    }    
  }
}

