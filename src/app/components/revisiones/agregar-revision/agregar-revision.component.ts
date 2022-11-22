import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { RepuestosService } from 'src/app/services/repuestos.service';
import { ImpresoraService } from 'src/app/services/impresora.service';
import { PersonaModel } from 'src/app/models/PersonaModel';
import { ImpresoraModel } from 'src/app/models/ImpresoraModel';
import { RepuestosModel } from 'src/app/models/RepuestosModel';
import { RevisionesService } from 'src/app/services/revisiones.service';
import { RevisionesModel } from 'src/app/models/RevisionesModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, timer } from 'rxjs';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-agregar-revision',
  templateUrl: './agregar-revision.component.html',
  styleUrls: ['./agregar-revision.component.scss']
})
export class AgregarRevisionComponent implements OnInit {

    listadoRevision = new Array<RevisionesModel>();
    listadoPersona = new Array<PersonaModel>();
    listadoImpresora = new Array<ImpresoraModel>();
    listadoRepuestos = new Array<RepuestosModel>();

    revisionForm: FormGroup;
    titulo = 'Crear Revisión';
    id: string | null;
    loading = false;

  constructor( 
   
    private repuestosService: RepuestosService,
    private revisionService: RevisionesService, 
    private personaService: PersonaService, 
    private impresoraService: ImpresoraService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private aRouter: ActivatedRoute,
    private router: Router

  ){
      this.revisionForm = this.fb.group({

      tecnico: ['', Validators.required],
      impresora: ['', Validators.required],   
      estado: ['', Validators.required] ,   
      revision: ['', Validators.required],
      repuesto: ['', Validators.required],   
      precio: ['', Validators.required],
      correo: ['', Validators.required],
      actualizacion: ['', Validators.required],
      detalle: ['', Validators.required],
      fecha: ['', Validators.required],
 
 
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

    ngOnInit(): void {
    this.editar() ;
    this.obtenerRepuestos();
    this.obtenerTecnico();
    this.obtenerImpresoras();
  }
  
    //registrar rol
  agregarRevision() {

      const revisiones: RevisionesModel = {
      Tecnico: this.revisionForm.get('tecnico')?.value,
      Impresora: this.revisionForm.get('impresora')?.value,
      Estado: this.revisionForm.get('estado')?.value,
      TipoRevision: this.revisionForm.get('revision')?.value,
      Repuesto: this.revisionForm.get('repuesto')?.value,
      Valor: this.revisionForm.get('precio')?.value,
      Email: this.revisionForm.get('correo')?.value,
      Actualizacion: this.revisionForm.get('actualizacion')?.value,
      Datalles: this.revisionForm.get('detalle')?.value,
      FechaRevision: this.revisionForm.get('fecha')?.value,
 

    }    
    revisiones.FechaRevision = new Date( revisiones.FechaRevision);
  
    console.log(revisiones);
    //si el id es null quiere decir que s eva a guardas un nuevo dato de lo contrario es actualizar
    if (this.id !== null) {

       this.loading = true;  
        this.revisionService.editarRevisiones(this.id, revisiones).subscribe(data => {
               
          const contador = timer(1000);
          contador.subscribe( (n) =>{
          this.loading = false;
          this.revisionForm.reset();
          this.toastr.info('La revisión fue actualizado con exito!', 'Revisión Actualizado!');

          const contador = timer(500);
          contador.subscribe( (n) =>{
          this.router.navigate(['/revisiones']);
        }); 
          });
      })
    } else {
        this.loading = true;      
        this.revisionService.guardarRevisiones(revisiones).subscribe(data => {   
            
          const contador = timer(1000);
          contador.subscribe( (n) =>{
          this.loading = false;
          this.revisionForm.reset();
          this.toastr.success('La revisión fue registrado con exito!', 'Revisión Registrado!');   
      
          const contador = timer(500);
          contador.subscribe( (n) =>{
          this.router.navigate(['/revisiones']);
        }); 
          });
        
      }, error => {
        console.log(error);
        this.toastr.error('No se pudieron registrar los datos!', 'Error de registrado');
        this.revisionForm.reset();
      })
    }
  }

  select(Nombre: any){

    let correo;  

    this.impresoraService.selectImpresora().subscribe(data => {
     
      console.log( data.Nombre, ' entramos'); 
     
      })
 
  }
  //editar
  editar() {

    if (this.id !== null) {

      this.titulo = 'Editar Revisión';
      this.revisionService.obtenerIdRevisiones(this.id).subscribe(data => {
      
        this.revisionForm.setValue({
     
          tecnico: data.Tecnico,
          impresora: data.Impresora,   
          estado: data.Estado,   
          revision: data.TipoRevision,
          repuesto: data.Repuesto,   
          precio: data.Valor,
          correo: data.Email,
          actualizacion: data.Actualizacion,
          detalle:data.Datalles,
          fecha: data.FechaRevision  
               
        })
      })
    }
  }

    //listar tecnico
    obtenerTecnico() {
      this.personaService.selectPersona().subscribe(data => {
        this.listadoPersona = data;

      }, error => {
        console.log(error);
      })
    }
    //listar impresora
    obtenerImpresoras() {
        this.impresoraService.selectImpresora().subscribe(data => {
          this.listadoImpresora = data;

        }, error => {
          console.log(error);
        })
    }
    //listar repuesto
    obtenerRepuestos() {
      this.repuestosService.selectRepuestos().subscribe(data => {
        this.listadoRepuestos = data;

      }, error => {
        console.log(error);
      })
   }

}
