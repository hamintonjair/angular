import { error } from 'jquery';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PersonaModel } from 'src/app/models/PersonaModel';


@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.scss']
})
export class FormularioPersonaComponent implements OnInit {

  personaForm: FormGroup;
  titulo = 'Crear Funcionario';
  id: string | null;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private personaService: PersonaService,
    private aRouter: ActivatedRoute,
    
  ){
    this.personaForm = this.fb.group({

      Nombres: ['', Validators.required],
      Apellidos: ['', Validators.required],
      Identificacion: ['', Validators.required],
      Telefono: ['', Validators.required],
      Email: ['', Validators.required],
      Socio: ['', Validators.required],
      // nivelEstudios: ['', Validators.required],

    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editar();
  }
  //registrar funcionario
  agregarPersona() {

    const p: PersonaModel = {
      Nombres: this.personaForm.get('Nombres')?.value,
      Apellidos: this.personaForm.get('Apellidos')?.value,
      Identificacion: this.personaForm.get('Identificacion')?.value,
      Telefono: this.personaForm.get('Telefono')?.value,
      Email: this.personaForm.get('Email')?.value,
      Direccion: this.personaForm.get('Direccion')?.value,
      FechaNacimiento: this.personaForm.get('FechaNacimiento')?.value,
      Socio: this.personaForm.get('Socio')?.value,
      // nivelEstudios: this.personaForm.get('nivelEstudios')?.value,
    }
    //si el id es null quiere decir que s eva a guardas un nuevo dato de lo contrario es actualizar
    if (this.id !== null) {

        this.personaService.editarPersona(this.id, p).subscribe(data => {
        this.toastr.info('El funcionario fue actualizado con exito!', 'Funcionario Actualizado!');
      })
    } else {
      
        this.personaService.guardarPersona(p).subscribe(data => {     
        this.toastr.success('El funcionario fue registrado con exito!', 'Funcionario Registrado!');
        
      }, error => {
        console.log(error);
        this.toastr.error('No se pudieron registrar los datos!', 'Error de registrado');
        this.personaForm.reset();
      })
    }
  }

  //editar
  editar() {

    if (this.id !== null) {

      this.titulo = 'Editar funcionario';
      this.personaService.obtenerIdPersona(this.id).subscribe(data => {

        this.personaForm.setValue({

          Nombres: data.Nombres,
          Apellidos: data.Apellidos,
          Identificacion: data.Identificacion,
          Telefono: data.Telefono,
          Email: data.Email,
          Direccion: data.Email,
          FechaNacimiento: data.FechaNacimiento,
          Socio: data.Socio,
        })
      })
    }
  }
}
