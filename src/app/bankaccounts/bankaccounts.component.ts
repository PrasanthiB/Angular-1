import { Component } from '@angular/core';
import { BankaccountService } from '../bankaccount.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bankaccounts',
  templateUrl: './bankaccounts.component.html',
  styleUrls: ['./bankaccounts.component.css']
})
export class BankaccountsComponent {

  public bankaccount:any = [];
  public term:string = "";
  public column:string = "";
  public order:string = "";

  constructor(private _bankaccountService:BankaccountService, private _router:Router){

    -_bankaccountService.getBankAccounts().subscribe(
      (data:any)=>{
        this.bankaccount=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

  filter(){

    this._bankaccountService.getFilteredBankAccounts(this.term).subscribe(
      (data:any)=>{
        this.bankaccount = data;
      },
      (err:any)=>{
        alert("internet server error")
      }
    )
  }

  sort(){
    this._bankaccountService.getSortedBankAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data.id)
        this.bankaccount = data;
      },
      (err:any)=>{
        alert("internet server error")
      }
    )
  }

  delete(id:string){
    this._bankaccountService.deleteBankAccount(id).subscribe(
      (data:any)=>{
        alert("successfully deleted....");
        location.reload();
      },
      (err:any)=>{
        alert("internet server error")
      }
    )
  }

  view(id:string){
    this._router.navigateByUrl("/dashboard/view-bankdetails/"+id)
  }

  edit(id:string){
    this._router.navigateByUrl("/dashboard/edit-bankdetails/"+id)
  }

}
