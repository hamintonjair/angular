import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PermisosModel } from '../models/PermisosModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  private readonly url: string = "http://localhost:3000/permisos/";

  constructor(
    private http: HttpClient) { }


    //guardar
  guardarPermisos(Permisos: PermisosModel): Observable<any> {
    return this.http.post(this.url, Permisos);
  }

  //metodo para listar Permisoss
  selectPermisos(): Observable<any> {
    return this.http.get(this.url);
  } 

  //eliminar Permisos
  eliminarPermisos(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  //seleccionar id para editar
  obtenerIdPermisos(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }
  //editar
  editarPermisos(id: string, Permisos: PermisosModel): Observable<any>{
    return this.http.put(this.url + id, Permisos);
  }
}
