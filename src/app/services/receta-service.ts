import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { recetaModel } from '../model/RecetaModel';

const URL_BASE: String = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class RecetaService {
  updateSubject: ReplaySubject<any> = new ReplaySubject();
  changesOnRecetas: Observable<any> = this.updateSubject.asObservable();

  notifyUpdateRecetas(data: any) {
    this.updateSubject.next(data);
  }

  constructor(private http: HttpClient) {}

  getRecetas(): Observable<recetaModel[]> {
    return this.http.get<recetaModel[]>(URL_BASE + '/recetas');
  }

  anadirReceta(receta: recetaModel) {
    this.http.post(URL_BASE + '/recetas', receta).subscribe((newReceta) => {
      this.notifyUpdateRecetas(null);
    });
  }

  eliminarReceta(id: number) {
    this.http.delete(URL_BASE + '/recetas/' + id).subscribe((newReceta) => {
      this.notifyUpdateRecetas(null);
    });
  }

  añadirCalificacion(id: number, nuevaCalificacion: number, media: number, votos: number): void {
    const totalPuntosAnterior = media * votos;
    const nuevosVotos = votos + 1;
    const nuevaMedia = (totalPuntosAnterior + nuevaCalificacion) / nuevosVotos;

    this.http
      .patch(URL_BASE + '/recetas/' + id, {
        mediaCalif: nuevaMedia,
        numVotos: nuevosVotos,
      })
      .subscribe((newReceta) => {
        this.notifyUpdateRecetas(null);
      });
  }

  getRecetasPorCalificacion(calif: number): Observable<recetaModel[]> {
    const url = `${URL_BASE}/recetas?exactCalif=${calif}`;
    return this.http.get<recetaModel[]>(url);
  }
}
