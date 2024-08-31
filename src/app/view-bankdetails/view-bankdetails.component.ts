import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankaccountService } from '../bankaccount.service';

@Component({
  selector: 'app-view-bankdetails',
  templateUrl: './view-bankdetails.component.html',
  styleUrls: ['./view-bankdetails.component.css']
})
export class ViewBankdetailsComponent {

  public bankDetails: any = {};

  constructor(private _activateRoute: ActivatedRoute, private _bankAccountService: BankaccountService) {
    _activateRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);

        _bankAccountService.getBankAccount(data.id).subscribe(
          (data:any)=>{
            this.bankDetails = data;
          }
        )
      }
    )
  }
}

