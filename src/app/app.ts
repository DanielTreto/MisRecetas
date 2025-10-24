import { Component, signal } from '@angular/core';
import { Navegador } from './navegador/navegador';
import { Receta } from './receta/receta';
import { Formulario } from './formulario/formulario';

@Component({
  selector: 'app-root',
  imports: [Navegador, Receta, Formulario],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
   
}
