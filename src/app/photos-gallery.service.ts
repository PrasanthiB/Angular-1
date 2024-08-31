import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosGalleryService {


  constructor(private _httpClient:HttpClient) { }


  getPhotoGallery():Observable<any>{
    return this._httpClient.get("https://api.imgflip.com/get_memes")
  }

}
