import { Component, signal } from '@angular/core';
import { Navegador } from './organismos/navegador/navegador';
import { Receta } from './moleculas/receta/receta';
import { Formulario } from './organismos/formulario/formulario';
import { recetaModel } from './model/RecetaModel';
import { Footer } from './organismos/footer/footer';
import { Hero } from './organismos/hero/hero';
import { SeccionRecetas } from "./organismos/seccion-recetas/seccion-recetas";

@Component({
  selector: 'app-root',
  imports: [Navegador, Formulario, Footer, Hero, SeccionRecetas],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  
  crearReceta(receta: recetaModel) {
    for (const recetaActual of this.recetas) {
      if (recetaActual.titulo.trim().toLowerCase() === receta.titulo.trim().toLowerCase()) {
        alert(`La receta "${recetaActual.titulo}" ya existe.`);
        return;
      }
    }
    this.recetas.push(receta);
  }
  recetas: recetaModel[] = [];
}
