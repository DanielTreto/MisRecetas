import { Component, output } from '@angular/core';

@Component({
  selector: 'app-filtro-calificacion',
  imports: [],
  templateUrl: './filtro-calificacion.html',
  styleUrl: './filtro-calificacion.scss'
})
export class FiltroCalificacion {
  calificacionSeleccionada: number = 0;

  filtroCambiado = output<number>();
  seleccionarFiltro(calificacion: number) {
    this.calificacionSeleccionada = calificacion;
    this.filtroCambiado.emit(this.calificacionSeleccionada);
  }
}
