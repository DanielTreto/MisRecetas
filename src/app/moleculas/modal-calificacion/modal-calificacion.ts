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
  private calificacionSubject = new ReplaySubject<number>(1);
  public calificacion$: Observable<number> = this.calificacionSubject.asObservable();
  votoEmitido = output<number>();

  get calificacion() {
    let value: number = 0;
    this.calificacionSubject.subscribe((v) => (value = v));
    return value;
  }

  ngOnInit() {
    this.calificacionSubject.next(0);
  }

  close = output();

  enviarVoto() {
    this.votoEmitido.emit(this.calificacion);
    this.close.emit();
  }

  cerrar() {
    this.close.emit();
  }

  manejarSeleccion(estrella: number) {
    const nuevoValor = this.calificacion === estrella ? 0 : estrella;
    this.calificacionSubject.next(nuevoValor);
  }
}
