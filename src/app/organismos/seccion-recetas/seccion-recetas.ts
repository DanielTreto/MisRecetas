import { Component } from '@angular/core';
import { recetaModel } from '../../model/RecetaModel';
import { Receta } from '../../moleculas/receta/receta';
import { Observable, Subscription } from 'rxjs';
import { RecetaService } from '../../services/receta-service';
import { AsyncPipe } from '@angular/common';
import { FiltroCalificacion } from '../../moleculas/filtro-calificacion/filtro-calificacion';

@Component({
  selector: 'app-seccion-recetas',
  imports: [Receta, AsyncPipe, FiltroCalificacion],
  templateUrl: './seccion-recetas.html',
  styleUrl: './seccion-recetas.scss',
})
export class SeccionRecetas {
  recetas: recetaModel[] = [];
  filtro: number = -1;

  recetasAsync$!: Observable<recetaModel[]>;
  constructor(private recetaService: RecetaService) {}

  private subscriptionUpdate: Subscription | null = null;

  ngOnInit() {
    this.recetasAsync$ = this.recetaService.getRecetas();

    this.subscriptionUpdate = this.recetaService.changesOnRecetas.subscribe(() => {
      if (this.filtro === -1) {
        this.recetasAsync$ = this.recetaService.getRecetas();
      } else {
        this.recetasAsync$ = this.recetaService.getRecetasPorCalificacion(this.filtro);
      }
    });
  }

  eliminarReceta(id: number) {
    this.recetaService.eliminarReceta(id);
  }

  anadirCalificacion(id: number, nuevaCalificacion: number, media: number, votos: number) {
    this.recetaService.añadirCalificacion(id, nuevaCalificacion, media, votos);
  }

  aplicarFiltro(calificacionSeleccionada: number) {
    this.filtro = calificacionSeleccionada;

    if (this.filtro === -1) {
      this.recetasAsync$ = this.recetaService.getRecetas();
    } else {
      this.recetasAsync$ = this.recetaService.getRecetasPorCalificacion(this.filtro);
    }
  }
}
