import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonaModel } from '../models/PersonaModel';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  private readonly url: string = "http://localhost:3000/personas/";

  constructor(
    private http: HttpClient) { }


    //guardar
  guardarPersona(persona: PersonaModel): Observable<any> {
    return this.http.post(this.url, persona);
  }

  //metodo para listar personas
  selectPersona(): Observable<any> {
    return this.http.get(this.url);
  } 

  //eliminar persona
  eliminarPersona(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  //seleccionar id para editar
  obtenerIdPersona(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }
  //editar
  editarPersona(id: string, persona: PersonaModel): Observable<any>{
    return this.http.put(this.url + id, persona);
  }
}
