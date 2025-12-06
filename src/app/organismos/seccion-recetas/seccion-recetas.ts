import { Component } from '@angular/core';
import { recetaModel } from '../../model/RecetaModel';
import { Receta } from '../../moleculas/receta/receta';
import { Observable, Subscription } from 'rxjs';
import { RecetaService } from '../../services/receta-service';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-seccion-recetas',
  imports: [Receta,AsyncPipe],
  templateUrl: './seccion-recetas.html',
  styleUrl: './seccion-recetas.scss',
})
export class SeccionRecetas {
  recetas: recetaModel[] = [];


  recetasAsync$!: Observable<recetaModel[]>;
  constructor(private recetaService: RecetaService) {}

  private subscriptionUpdate: Subscription | null = null;


  ngOnInit() {
    this.recetasAsync$ = this.recetaService.getRecetas();

    this.subscriptionUpdate = this.recetaService.changesOnRecetas.subscribe(() => {
        this.recetasAsync$ = this.recetaService.getRecetas();
    });
  }

  eliminarReceta(id: number) {
    this.recetaService.eliminarReceta(id);
  }
}
