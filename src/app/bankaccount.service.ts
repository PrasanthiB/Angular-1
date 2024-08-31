import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankaccountService {

  public baseUrl:string = "https://6128991386a213001729f9df.mockapi.io/test/v1/principals"

  constructor(private _httpClient:HttpClient) { }

  getBankAccounts():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  }

  getBankAccount(id:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+id);
  }

  getFilteredBankAccounts(term:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+term);
  }

  getSortedBankAccounts(column:string, order:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&Ordertype="+order)
  }

  deleteBankAccount(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id)
  }

  createBankDetails(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl+"?filter=",data)
  }

  updateBankDetails(data:any, id:string):Observable<any>{
    return this._httpClient.put(this.baseUrl+"/"+id,data)
  }
}
