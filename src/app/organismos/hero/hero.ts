import { Component } from '@angular/core';
import { Boton } from '../../átomos/boton/boton';

@Component({
  selector: 'app-hero',
  imports: [Boton],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
