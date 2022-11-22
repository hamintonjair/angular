import { LoginModel } from '../models/LoginModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly url: string = "http://localhost:3000/rols/";

  constructor(
    private http: HttpClient,
    private router: Router
       ) { }

   //metodo para listar Permisoss
   selectPermisos(): Observable<any> {
    return this.http.get(this.url);
  } 
  guardarLogin(Login: LoginModel): Observable<any> {
    return this.http.post(this.url, Login);
  }
   //eliminar login
   eliminarLogin(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

}
