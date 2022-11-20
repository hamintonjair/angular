
import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { PermisosModel } from 'src/app/models/PermisosModel';
import { formatDate } from '@angular/common';
import { interval, timer } from 'rxjs';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PermisosService } from 'src/app/services/permisos.service';
import { PersonaModel } from 'src/app/models/PersonaModel';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-formulario-modulos',
  templateUrl: './formulario-modulos.component.html',
  styleUrls: ['./formulario-modulos.component.scss']
})
export class FormularioModulosComponent implements OnInit {

  listadoPermisos = new Array<PermisosModel>();

  permisosForm: FormGroup;
  titulo = 'Crear Permisos';
  id: string | null;
  loading = false;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private permisosService: PermisosService,
    private _personaService: PersonaService,
    private aRouter: ActivatedRoute,
    
  ){
    this.permisosForm = this.fb.group({
      
      Rol: ['', Validators.required],
      Persona: ['', Validators.required],
      Seguros: ['', Validators.required],
      Impresora: ['', Validators.required],
      Impresion3D: ['', Validators.required],
      Repuestos: ['', Validators.required],
      Revisiones: ['', Validators.required],
      RevisionFinalizadas: ['', Validators.required],

    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editar();
  }
  //registrar funcionario
  agregarPermisos() {

    const p: PermisosModel = {

      Rol: this.permisosForm.get('Rol')?.value,
      Persona: this.permisosForm.get('Persona')?.value,
      Seguros: this.permisosForm.get('Seguros')?.value,
      Impresora: this.permisosForm.get('Impresora')?.value,
      Impresion3D: this.permisosForm.get('Impresion3D')?.value,
      Repuestos: this.permisosForm.get('Repuestos')?.value,
      Revisiones: this.permisosForm.get('Revisiones')?.value,
      RevisionFinalizadas: this.permisosForm.get('RevisionFinalizadas')?.value   
  
    }   
   
    console.log(p);
    //si el id es null quiere decir que s eva a guardas un nuevo dato de lo contrario es actualizar
    if (this.id !== null) {

        this.loading = true;  
        this.permisosService.editarPermisos(this.id, p).subscribe(data => {
          const contador = timer(1000);
          contador.subscribe( (n) =>{
          this.loading = false;
          this.permisosForm.reset();
          this.toastr.info('El Permisos se actualizó con exito!', 'Permisos Actualizado!');
        });
       
      })
    } else {
        this.loading = true;  
        this.permisosService.guardarPermisos(p).subscribe(data => {     
          const contador = timer(1000);
          contador.subscribe( (n) =>{
          this.loading = false;
          this.permisosForm.reset();
          this.toastr.success('Permisos asignados con exito!', 'Permisos Registrado!');
        });      
        
      }, error => {
        console.log(error);
        this.toastr.error('No se pudieron registrar los datos!', 'Error de registrado');
        this.permisosForm.reset();
      })
    }
  }
//editar
  editar() {

    if (this.id !== null) {

      this.titulo = 'Editar permisos';
      this.permisosService.obtenerIdPermisos(this.id).subscribe(data => {

        this.permisosForm.setValue({

          Rol: data.Rol,
          Persona: data.Persona,
          Seguros: data.Seguros,
          Impresora: data.Impresora,
          Impresion3D: data.Impresion3D,
          Repuestos: data.Repuestos,
          Revisiones: data.Revisiones,
          RevisionFinalizadas: data.RevisionFinalizadas,
        
        })
      })
    }
  } 
} 