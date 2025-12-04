import { Component } from '@angular/core';
import { recetaModel } from '../../model/RecetaModel';
import { Receta } from '../../moleculas/receta/receta';

@Component({
  selector: 'app-seccion-recetas',
  imports: [Receta],
  templateUrl: './seccion-recetas.html',
  styleUrl: './seccion-recetas.scss',
})
export class SeccionRecetas {
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

  eliminarReceta(receta: recetaModel) {
    this.recetas = this.recetas.filter((r) => r.titulo !== receta.titulo);
  }
}
