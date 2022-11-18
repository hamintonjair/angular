import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Impresion3d } from '../models/Impresion3d';

@Injectable({
  providedIn: 'root'
})
export class Impresion3dService {

  private readonly url: string = "http://localhost:3000/impresiones3ds/";

  constructor(


    private http: HttpClient) { }


    //guardar
  guardarImpresion3d (Impresion3d : Impresion3d ): Observable<any> {
    return this.http.post(this.url, Impresion3d );
  }

  //metodo para listar nivel Impresion3d 
  selectImpresion3d (): Observable<any> {
    return this.http.get(this.url);
  }


  //eliminar oersona
  eliminarImpresion3d (id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  //seleccionar id para editar
  obtenerIdImpresion3d (id: string): Observable<any>{
    return this.http.get(this.url + id);
  }
  //editar
  editarImpresion3d (id: string, Impresion3d : Impresion3d ): Observable<any>{
    return this.http.put(this.url + id, Impresion3d );
  }
}
