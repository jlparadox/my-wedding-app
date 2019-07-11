import {Component, OnInit} from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { GalleryItem, GalleryConfig, ImageItem, ThumbnailsPosition } from '@ngx-gallery/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: 'location.page.html',
  styleUrls: ['location.page.scss'],
})
export class LocationPage implements OnInit {
  readonly images$: Observable<GalleryItem[]>;

  readonly media$: Observable<GalleryConfig>;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  images: GalleryItem[];
  constructor(media: MediaObserver) {
    this.media$ = media.media$.pipe(
        map((res: MediaChange) => {
          if (res.mqAlias === 'sm' || res.mqAlias === 'xs') {
            return {
              thumbPosition: ThumbnailsPosition.Top,
              thumbWidth: 80,
              thumbHeight: 80
            };
          }
          return {
            thumbPosition: ThumbnailsPosition.Left,
            thumbWidth: 120,
            thumbHeight: 90
          };
        })
      );
  }

  ngOnInit() {
    this.images = [
        new ImageItem({ src: 'assets/images/aquila/img_1.jpg', thumb: 'assets/images/aquila/img_1.jpg'}),
        new ImageItem({ src: 'assets/images/aquila/img_1.jpg', thumb: 'assets/images/aquila/img_1.jpg'}),
        new ImageItem({ src: 'assets/images/aquila/img_1.jpg', thumb: 'assets/images/aquila/img_1.jpg'}),
        new ImageItem({ src: 'assets/images/aquila/img_1.jpg', thumb: 'assets/images/aquila/img_1.jpg'}),
    ];
    this.galleryImages = [
        {
            small: 'assets/images/aquila/img_1.jpg',
            medium: 'assets/images/aquila/img_1.jpg',
            big: 'assets/images/aquila/img_1.jpg'
        },
        {
            small: 'assets/images/aquila/img_2.jpg',
            medium: 'assets/images/aquila/img_2.jpg',
            big: 'assets/images/aquila/img_2.jpg'
        },
        {
            small: 'assets/images/aquila/img_3.jpg',
            medium: 'assets/images/aquila/img_3.jpg',
            big: 'assets/images/aquila/img_3.jpg'
        },
        {
            small: 'assets/images/aquila/img_4.jpg',
            medium: 'assets/images/aquila/img_4.jpg',
            big: 'assets/images/aquila/img_4.jpg'
        },
        {
            small: 'assets/images/aquila/img_5.jpg',
            medium: 'assets/images/aquila/img_5.jpg',
            big: 'assets/images/aquila/img_5.jpg'
        },
        {
            small: 'assets/images/aquila/img_6.jpg',
            medium: 'assets/images/aquila/img_6.jpg',
            big: 'assets/images/aquila/img_6.jpg'
        }
    ];
  }
}
