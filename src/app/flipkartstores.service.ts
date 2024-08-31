import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartstoresService {


  constructor(private _httpClient:HttpClient) { }

  getproduct():Observable<any>{
    return this._httpClient.get("https://fakestoreapi.com/products")
  }
}
