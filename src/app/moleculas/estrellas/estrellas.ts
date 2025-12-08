import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-estrellas',
  imports: [],
  templateUrl: './estrellas.html',
  styleUrl: './estrellas.scss',
})
export class Estrellas {
  calificacion = input.required<number>();
  interactivo = input(false);
  estrellaSeleccionada = output<number>();
  estrellasArray = [1, 2, 3, 4, 5];

  // Método que maneja el clic
  handleClick(estrella: number) {
    if (this.interactivo()) {
      this.estrellaSeleccionada.emit(estrella);
    }
  }

  // Lógica para determinar si la estrella está llena o vacía
  getSrc(i: number): string {
    const calif = this.calificacion();

    if (!this.interactivo()) {
      const califRedondeada = Math.round(calif);
      return i <= califRedondeada ? 'estrella.png' : 'estrellaVacia.png';
    }

    return i <= calif ? 'estrella.png' : 'estrellaVacia.png';
  }
}
