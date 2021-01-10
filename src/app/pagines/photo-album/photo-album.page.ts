import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.page.html',
  styleUrls: ['./photo-album.page.scss'],
})
export class PhotoAlbumPage implements OnInit {

  fotos: any[] = [
    {
      id: "img_0",
      src: "../../../assets/edificis.jpeg",
      alt: 'Ciudad con edificios',
      text: 'Ciudad con edificios.',
    },
    {
      id: "img_1",
      src: "../../../assets/kit_espia.jpeg",
      alt: 'Kit del espía definitivo',
      text: 'Kit del espía definitivo',
    },
    {
      id: "img_2",
      src: "../../../assets/torre.jpeg",
      alt: 'Torre torcida',
      text: 'Torre torcida',
    },
  ];


  constructor() { }

  ngOnInit() {
  }
  

}
