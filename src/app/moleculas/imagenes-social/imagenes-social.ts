import { Component } from '@angular/core';

@Component({
  selector: 'app-imagenes-social',
  imports: [],
  templateUrl: './imagenes-social.html',
  styleUrl: './imagenes-social.scss',
})
export class ImagenesSocial {
  socialLinks = [
    {
      src: 'https://images.seeklogo.com/logo-png/31/1/twitter-logo-png_seeklogo-318424.png',
      alt: 'Logo de Twitter/X',
    },
    {
      src: 'https://www.transparentpng.com/download/logo-instagram/o0u6HK-logo-instagram-clipart-file.png',
      alt: 'Logo de Instagram',
    },
    { src: 'https://cdn-icons-png.flaticon.com/512/20/20673.png', alt: 'Logo de Facebook' },
  ];
}
