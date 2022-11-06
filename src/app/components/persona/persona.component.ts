import { PersonaModel } from 'src/app/models/PersonaModel';
import { PersonaService } from 'src/app/services/persona.service';
import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  listadoPersonas = new Array<PersonaModel>();

  constructor(private _personaService: PersonaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  //listar
  obtenerPersonas() {
    this._personaService.selectPersona().subscribe(data => {
      this.listadoPersonas = data;

    }, error => {
      console.log(error);
    })
  }
  //eliminar
  eliminarPersona(id: any) {    
    this._personaService.eliminarPersona(id).subscribe(data => {
      this.toastr.error('La persona fue eliminada con exito', 'Persona eliminada');
      this.obtenerPersonas();
    }, error => {
      console.log(error);
    })
  }
  
 }
