import { Component } from '@angular/core';
import { ImagenesSocial } from '../../moleculas/imagenes-social/imagenes-social';

@Component({
  selector: 'app-footer',
  imports: [ImagenesSocial],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
