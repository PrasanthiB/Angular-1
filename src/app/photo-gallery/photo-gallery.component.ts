import { Component } from '@angular/core';
import { PhotosGalleryService } from '../photos-gallery.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent {

  public photos: any = [];

  constructor(private _photosGalleryService: PhotosGalleryService) {
    _photosGalleryService.getPhotoGallery().subscribe(
      (data: any) => {
        this.photos = data.data.memes;
        console.log(data)
      },
      (err: any) => {
        alert("server error")
      }
    )
  }

}
