import { RevisionesModel } from './../models/RevisionesModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RevisionesService {

  private readonly url: string = "http://localhost:3000/revisions/";

  constructor(
    private http: HttpClient) { }

  //guardar
  guardarRevisiones(Revisiones: RevisionesModel): Observable<any> {
    return this.http.post(this.url, Revisiones);
  }

  //metodo para listar nivel Revisiones
  selectRevisiones(): Observable<any> {
    return this.http.get(this.url);
  }


  //eliminar Revisiones
  eliminarRevisiones(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  //seleccionar id para editar
  obtenerIdRevisiones(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }
  //editar
  editarRevisiones(id: string, Revisiones: RevisionesModel): Observable<any>{
    return this.http.put(this.url + id, Revisiones);
  }
}
