import { Component, input, output } from '@angular/core';
import { ModalCalificacion } from '../modal-calificacion/modal-calificacion';
import { Estrellas } from "../estrellas/estrellas";

@Component({
  selector: 'app-receta',
  imports: [ModalCalificacion, Estrellas],
  templateUrl: './receta.html',
  styleUrl: './receta.scss',
})
export class Receta {
  titulo = input('Title');
  imagen = input('default.jpg');
  ingredientes = input(['1', '2', '3']);
  mediaCalif = input(0);
  numVotos = input(0);
  mostrarModal: boolean = false;

  nuevaCalificacion = output<number>();
  recetaEliminada = output<void>();

  actualizarVotacion(nuevaCalificacion: number) {
    this.nuevaCalificacion.emit(nuevaCalificacion);
  }

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
