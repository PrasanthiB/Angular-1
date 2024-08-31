import { TestBed } from '@angular/core/testing';

import { PhotosGalleryService } from './photos-gallery.service';

describe('PhotosGalleryService', () => {
  let service: PhotosGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotosGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
