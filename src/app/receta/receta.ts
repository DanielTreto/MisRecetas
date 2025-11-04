import { Component, input, output } from '@angular/core';
import { recetaModel } from '../model/RecetaModel';

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

  recetaEliminada = output<recetaModel>();

  eliminar() {
    let receta = new recetaModel(this.titulo(),this.imagen(),this.ingredientes().join(', '));
    this.recetaEliminada.emit(receta);
  }
}
