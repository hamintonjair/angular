import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { PersonaModel } from 'src/app/models/PersonaModel';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.scss']
})
export class FormularioPersonaComponent implements OnInit {

  persona : PersonaModel;
  listPersona = new Array<PersonaModel>();

  constructor(private personaService : PersonaService){
       this.persona = new PersonaModel();
   }

  ngOnInit(): void {
    this.personaService.insertPersona().subscribe(data => {
      this.listPersona = Object.values(data);
    })
  }

  //registro de persona
  RegisterPersona(){

    let p = new PersonaModel();
    p.Nombres = this.persona.Nombres;
    p.Apellidos = this.persona.Apellidos;
    p.Identificacion = this.persona.Identificacion;
    p.Telefono = this.persona.Identificacion;
    p.Email = this.persona.Email;
    p.Direccion = this.persona.Direccion;
    p.FechaNacimiento = this.persona.FechaNacimiento;
    p.Socio = this.persona.Socio;
    p.nivelEstudios = this.persona.nivelEstudios
       
    this.listPersona.push(p);
  }


}
