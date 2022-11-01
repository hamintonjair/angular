import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonaModel } from '../models/PersonaModel';


@Injectable({
  providedIn: 'root'
})


export class PersonaService {

 private readonly url: string = "http://localhost:3001/personas";

  constructor(    
        private http : HttpClient    
    ){}

   selectPérsona(){
    return this.http.get(this.url);
   }

   postPersona(persona: PersonaModel){    
      return this.http.post(this.url, persona );
  
   }

  insertPersona(){
      return this.http.post(this.url, {
        headers: {
          'Content-Type' :'application/json'
        }
      });
    }
}
