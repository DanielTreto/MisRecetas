import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Estrellas } from '../estrellas/estrellas';

@Component({
  selector: 'app-modal-calificacion',
  imports: [CommonModule, Estrellas],
  templateUrl: './modal-calificacion.html',
  styleUrl: './modal-calificacion.scss',
})
export class ModalCalificacion {
  // ReplaySubject para manejar la calificación seleccionada.
  private calificacionSubject = new ReplaySubject<number>(1);
  // Observable público para suscribirse a los cambios de calificación.
  public calificacion$: Observable<number> = this.calificacionSubject.asObservable();

  votoEmitido = output<number>();
  close = output();

  // Getter que retorna la calificación actual del Subject.
  get calificacion() {
    let value: number = 0;
    this.calificacionSubject.subscribe((v) => (value = v));
    return value;
  }

  // Inicializa el ReplaySubject con un valor de 0 al cargar el componente para que siempre haya un valor inicial.
  ngOnInit() {
    this.calificacionSubject.next(0);
  }

  // Emite el voto y cierra el modal.
  enviarVoto() {
    this.votoEmitido.emit(this.calificacion);
    this.close.emit();
  }


  // Cierra el modal sin emitir ningún voto.
  cerrar() {
    this.close.emit();
  }

  // Maneja la selección de una estrella (clic).
  manejarSeleccion(estrella: number) {
    const nuevoValor = this.calificacion === estrella ? 0 : estrella;
    this.calificacionSubject.next(nuevoValor);
  }
}
