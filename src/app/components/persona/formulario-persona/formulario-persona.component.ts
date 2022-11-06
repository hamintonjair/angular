import { error } from 'jquery';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { NivelEstudioService } from 'src/app/services/nivel-estudio.service';
import { NivelEstudioModel } from 'src/app/models/NivelEstudioModel';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { interval, timer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { PersonaModel } from 'src/app/models/PersonaModel';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.scss']
})
export class FormularioPersonaComponent implements OnInit {

  listadoNivelEstudio = new Array<NivelEstudioModel>();
  personaForm: FormGroup;
  titulo = 'Crear Funcionario';
  id: string | null;
  loading = false;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private personaService: PersonaService,
    private aRouter: ActivatedRoute,
    private NivelEstudioService: NivelEstudioService
    
  ){
    this.personaForm = this.fb.group({

      Nombres: ['', Validators.required],
      Apellidos: ['', Validators.required],
      Identificacion: ['', Validators.required],
      Telefono: ['', Validators.required],
      Email: ['', Validators.required],
      Direccion: ['', Validators.required],
      FechaNacimiento: ['', Validators.required],
      Socio: ['', Validators.required],
      nivelEstudios: ['', Validators.required],

    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editar();
    this.obtenerEstudios();
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
      NivelEstudios: this.personaForm.get('nivelEstudios')?.value,
    }
   
      p.FechaNacimiento = new Date( p.FechaNacimiento);
   
    console.log(p);
    //si el id es null quiere decir que s eva a guardas un nuevo dato de lo contrario es actualizar
    if (this.id !== null) {

        this.loading = true;  
        this.personaService.editarPersona(this.id, p).subscribe(data => {
          const contador = timer(1000);
          contador.subscribe( (n) =>{
          this.loading = false;
          this.personaForm.reset();
          this.toastr.info('El funcionario fue actualizado con exito!', 'Funcionario Actualizado!');
        });
       
      })
    } else {
        this.loading = true;  
        this.personaService.guardarPersona(p).subscribe(data => {     
          const contador = timer(1000);
          contador.subscribe( (n) =>{
          this.loading = false;
          this.personaForm.reset();
          this.toastr.success('El funcionario fue registrado con exito!', 'Funcionario Registrado!');
        });      
        
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
          Direccion: data.Direccion,
          FechaNacimiento: data.FechaNacimiento,
          nivelEstudios: data.NivelEstudios,   
          Socio: data.Socio,
        })
      })
    }
  }
  //listado niveles d eestudios
  obtenerEstudios() {
    this.NivelEstudioService.selectEstudio().subscribe(data => {
      this.listadoNivelEstudio = data;
    }, error => {
      console.log(error);
    })
  }
}
