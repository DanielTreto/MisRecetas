import { Component, input } from '@angular/core';

@Component({
  selector: 'app-boton',
  imports: [],
  templateUrl: './boton.html',
  styleUrl: './boton.scss',
})
export class Boton {
  type = input('type');
  class = input('class');
  texto = input('texto');
}
