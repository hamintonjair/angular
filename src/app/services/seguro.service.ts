import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeguroModel } from '../models/SeguroModel';

@Injectable({
  providedIn: 'root'
})
export class SeguroService {

  private readonly url: string = "http://localhost:3000/seguro-impresoras/";

  constructor(
    private http: HttpClient) { }


    //guardar
  guardarSeguro(seguro: SeguroModel): Observable<any> {
    return this.http.post(this.url, seguro);
  }

  //metodo para listar nivel Seguro
  selectSeguro(): Observable<any> {
    return this.http.get(this.url);
  }


  //eliminar seguro
  eliminarSeguro(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  //seleccionar id para editar
  obtenerIdSeguro(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }
  //editar
  editarSeguro(id: string, Seguro: SeguroModel): Observable<any>{
    return this.http.put(this.url + id, Seguro);
  }
}
