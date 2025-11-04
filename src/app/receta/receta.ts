import { Component, input } from '@angular/core';

@Component({
  selector: 'app-receta',
  imports: [],
  templateUrl: './receta.html',
  styleUrl: './receta.scss'
})
export class Receta {
  titulo = input('Title');
  imagen = input('default.jpg');
  ingredientes = input(['1','2','3']);
  
}
