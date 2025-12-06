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
  
}
