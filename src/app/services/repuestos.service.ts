import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RepuestosModel } from '../models/RepuestosModel';

@Injectable({
  providedIn: 'root'
})
export class RepuestosService {

  private readonly url: string = "http://localhost:3000/repuestos/";

  constructor(
    private http: HttpClient) { }

  //guardar
  guardarRepuestos(Repuestos: RepuestosModel): Observable<any> {
    return this.http.post(this.url, Repuestos);
  }

  //metodo para listar nivel Repuestos
  selectRepuestos(): Observable<any> {
    return this.http.get(this.url);
  }

  //eliminar repuestos
  eliminarRepuestos(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  //seleccionar id para editar
  obtenerIdRepuestos(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }
  //editar
  editarRepuestos(id: string, Repuestos: RepuestosModel): Observable<any>{
    return this.http.put(this.url + id, Repuestos);
  }
}
