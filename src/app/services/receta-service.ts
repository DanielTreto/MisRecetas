import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { recetaModel } from '../model/RecetaModel';


@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  updateSubject: ReplaySubject<any> = new ReplaySubject();
  changesOnRecetas: Observable<any> = this.updateSubject.asObservable();

  notifyUpdateRecetas(data: any) {
    this.updateSubject.next(data);
  }

  constructor(private http: HttpClient) {}
  getRecetas(): Observable<recetaModel[]> {
    return this.http.get<recetaModel[]>('http://localhost:3000/recetas');
  }

  recetas: recetaModel[] = [];

  anadirReceta(receta: recetaModel) {
    this.recetas.push(receta);
  }

  anadirMensaje(titulo: string, imagen: string, ingredientes: string) {
    let receta = new recetaModel(titulo, imagen, ingredientes);
    return this.http
      .post('http://localhost:3000/recetas', receta)
  }

  listarRecetas(): recetaModel[] {
    return this.recetas;
  }
}
