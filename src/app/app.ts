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
   recetas = [
    {
      titulo: 'Paella',
      imagen: 'https://www.goya.com/wp-content/uploads/2023/10/goya-shrimp-paella.jpg',
      ingredientes: ['Arroz', 'Mariscos', 'Azafrán', 'Verduras']
    },
    {
      titulo: 'Pizza Margarita',
      imagen: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
      ingredientes: ['Masa', 'Tomate', 'Mozzarella', 'Albahaca']
    },
    {
      titulo: 'Hamburguesa',
      imagen: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/salad-1238247_1280.jpg',
      ingredientes: ['Lechuga', 'Pollo', 'Queso parmesano', 'Salsa César']
    },
    {
      titulo: 'Sushi',
      imagen: 'https://www.kikkoman.es/fileadmin/_processed_/4/2/csm_sushi-kakkoii_2c56fe3133.webp',
      ingredientes: ['Arroz', 'Pescado crudo', 'Alga nori', 'Soja']
    }
  ];

  agregarReceta(titulo: any, imagen: any, ingredientes: any) {
    this.recetas.push({ titulo, imagen, ingredientes });
  }
}
