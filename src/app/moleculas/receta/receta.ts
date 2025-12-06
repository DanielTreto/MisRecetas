import { Component, input, output } from '@angular/core';
import { recetaModel } from '../../model/RecetaModel';

@Component({
  selector: 'app-receta',
  imports: [],
  templateUrl: './receta.html',
  styleUrl: './receta.scss',
})
export class Receta {
  titulo = input('Title');
  imagen = input('default.jpg');
  ingredientes = input(['1', '2', '3']);
  mediaCalif = input(0);
  numVotos = input(0);
  estrellas: string[] = [];

  ngOnInit() {
    let numEstrellasVacias = 5 - this.mediaCalif();

    for (let i = 0; i < this.mediaCalif(); i++) {
      this.estrellas.push('estrella.png');
    }
    for (let i = 0; i < numEstrellasVacias; i++) {
      this.estrellas.push('estrellaVacia.png');
    }
  }

  recetaEliminada = output();

  eliminar() {
    this.recetaEliminada.emit();
  }
}
