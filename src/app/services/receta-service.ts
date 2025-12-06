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

  anadirReceta(receta: recetaModel) {
    this.http.post('http://localhost:3000/recetas', receta)
      .subscribe(newReceta => {
        alert('Receta Created:' + JSON.stringify(newReceta));
        this.notifyUpdateRecetas(null);
      });
  }


  eliminarReceta(id: number) {
    this.http.delete('http://localhost:3000/recetas/' + id)
      .subscribe(newReceta => {
        alert('Receta Deleted:' + JSON.stringify(newReceta));
        this.notifyUpdateRecetas(null);
      });
  }



}
