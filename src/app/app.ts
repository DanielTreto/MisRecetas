import { Component, signal } from '@angular/core';
import { Navegador } from './organismos/navegador/navegador';
import { Receta } from './moleculas/receta/receta';
import { Formulario } from './organismos/formulario/formulario';
import { recetaModel } from './model/RecetaModel';
import { Footer } from './organismos/footer/footer';
import { Hero } from './organismos/hero/hero';

@Component({
  selector: 'app-root',
  imports: [Navegador, Receta, Formulario, Footer, Hero],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  recetas: recetaModel[] = [];

  ngOnInit() {
    this.recetas = [
      new recetaModel(
        'Paella',
        'https://www.goya.com/wp-content/uploads/2023/10/goya-shrimp-paella.jpg',
        'Arroz, Mariscos, Azafrán, Verduras'
      ),
      new recetaModel(
        'Pizza Margarita',
        'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
        'Masa, Tomate, Mozzarella, Albahaca'
      ),
      new recetaModel(
        'Hamburguesa',
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/salad-1238247_1280.jpg',
        'Lechuga, Pollo, Queso parmesano, Salsa César'
      ),
      new recetaModel(
        'Sushi',
        'https://www.kikkoman.es/fileadmin/_processed_/4/2/csm_sushi-kakkoii_2c56fe3133.webp',
        'Arroz, Pescado crudo, Alga nori, Soja'
      ),
    ];
  }

  crearReceta(receta: recetaModel) {
    for (const recetaActual of this.recetas) {
      if (recetaActual.titulo.trim().toLowerCase() === receta.titulo.trim().toLowerCase()) {
        alert(`La receta "${receta.titulo.trim()}" ya existe.`);
        return;
      }
    }
    this.recetas.push(receta);
  }

  eliminarReceta(receta: recetaModel) {
    this.recetas = this.recetas.filter((r) => r.titulo !== receta.titulo);
  }
}
