import { RolModel } from './../models/RolModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RolService {

  private readonly url: string = "http://localhost:3000/rols/";

  constructor(
    private http: HttpClient) { }


    //guardar
  guardarRol(rol: RolModel): Observable<any> {
    return this.http.post(this.url, rol);
  }

  //metodo para listar nivel Rol
  selectRol(): Observable<any> {
    return this.http.get(this.url);
  }


  //eliminar oersona
  eliminarRol(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  //seleccionar id para editar
  obtenerIdRol(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }
  //editar
  editarRol(id: string, rol: RolModel): Observable<any>{
    return this.http.put(this.url + id, rol);
  }
}
