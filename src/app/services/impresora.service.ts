import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImpresoraModel } from '../models/ImpresoraModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImpresoraService {

  private readonly url: string = "http://localhost:3000/impresoras/";

  constructor(
    private http: HttpClient) { }


    //guardar
  guardarImpresora(impresora: ImpresoraModel): Observable<any> {
    return this.http.post(this.url, impresora);
  }

  //metodo para listar nivel impresora
  selectImpresora(): Observable<any> {
    return this.http.get(this.url);
  }
  //eliminar oersona
  eliminarImpresora(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  //seleccionar id para editar
  obtenerIdImpresora(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }
  //editar
  editarImpresora(id: string, impresora: ImpresoraModel): Observable<any>{
    return this.http.put(this.url + id, impresora);
  }
}
