import { Component, input, output } from '@angular/core';
import { ModalCalificacion } from '../modal-calificacion/modal-calificacion';

@Component({
  selector: 'app-receta',
  imports: [ModalCalificacion],
  templateUrl: './receta.html',
  styleUrl: './receta.scss',
})
export class Receta {
  titulo = input('Title');
  imagen = input('default.jpg');
  ingredientes = input(['1', '2', '3']);
  mediaCalifInput = input(0);
  numVotosInput = input(0);
  estrellas: string[] = [];
  mostrarModal: boolean = false;
  mediaCalif: number = 0;
  numVotos: number = 0;

  ngOnInit() {
    this.mediaCalif = this.mediaCalifInput();
    this.numVotos = this.numVotosInput();
    this.calcularEstrellas(this.mediaCalif);
  } 

  calcularEstrellas(media: number) {
    this.estrellas = [];
    const mediaRedondeada = Math.round(media);
    let numEstrellasVacias = 5 - mediaRedondeada;

    for (let i = 0; i < mediaRedondeada; i++) {
      this.estrellas.push('estrella.png');
    }
    for (let i = 0; i < numEstrellasVacias; i++) {
      this.estrellas.push('estrellaVacia.png');
    }
  } 

  nuevaCalificacion = output<number>();

  actualizarVotacion(nuevaCalificacion: number) {
    this.nuevaCalificacion.emit(nuevaCalificacion);
  }

  recetaEliminada = output();

  eliminar() {
    this.recetaEliminada.emit();
  }

  abrirModalCalificacion() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }
}
