import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NivelEstudioModel } from '../models/NivelEstudioModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NivelEstudioService {

  private readonly url: string = "http://localhost:3000/nivel-estudios/";

  constructor(
    private http: HttpClient) { }


    //guardar
  guardarEstudio(estudio: NivelEstudioModel): Observable<any> {
    return this.http.post(this.url, estudio);
  }

  //metodo para listar nivel estudio
  selectEstudio(): Observable<any> {
    return this.http.get(this.url);
  }

  //eliminar oersona
  eliminarEstudio(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  //seleccionar id para editar
  obtenerIdEstudio(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }
  //editar
  editarEstudio(id: string, estudio: NivelEstudioModel): Observable<any>{
    return this.http.put(this.url + id, estudio);
  }
}
