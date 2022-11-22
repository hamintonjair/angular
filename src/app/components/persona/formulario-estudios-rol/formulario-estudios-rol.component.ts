import { RouterTestingModule } from '@angular/router/testing';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolService } from 'src/app/services/rol.service';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { PersonaModel } from 'src/app/models/PersonaModel';
import { ToastrService } from 'ngx-toastr';
import { interval, timer } from 'rxjs';
import { RolModel } from 'src/app/models/RolModel';
import { NivelEstudioModel } from 'src/app/models/NivelEstudioModel';
import { NivelEstudioService } from 'src/app/services/nivel-estudio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario-estudios-rol',
  templateUrl: './formulario-estudios-rol.component.html',
  styleUrls: ['./formulario-estudios-rol.component.scss']
})
export class FormularioEstudiosRolComponent implements OnInit {

  listadoPersonas = new Array<PersonaModel>();
  rolForm: FormGroup;
  estudioForm: FormGroup;
  tituloEstudio = 'Crear Nivel estudio';
  titulo = 'Crear Rol';
  id: string | null;
  loadingE = false;
  loadingR = false;

  constructor(private _personaService: PersonaService, private fb: FormBuilder,
    private toastr: ToastrService,
    private RolService: RolService,
    private NivelEstudioService: NivelEstudioService,
    private aRouter: ActivatedRoute,
    private router: Router

  ){

    //rol
    this.rolForm = this.fb.group({

      Rol: ['', Validators.required],
      Nombre: ['', Validators.required],   
      Password: ['', Validators.required]    
    })

    //estudio
    this.estudioForm = this.fb.group({

      Nombre: ['', Validators.required]   
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editar();
    this.editarEstudio();
    this.obtenerPersonas();
       
  }
  
  //registrar rol
  agregarRol() {

    const rol: RolModel = {
      Rol: this.rolForm.get('Rol')?.value,
      Nombre: this.rolForm.get('Nombre')?.value,
      Password: this.rolForm.get('Password')?.value,
    
    }
    console.log(rol);
    //si el id es null quiere decir que s eva a guardas un nuevo dato de lo contrario es actualizar
    if (this.id !== null) {

       this.loadingR = true;  
        this.RolService.editarRol(this.id, rol).subscribe(data => {
               
          const contador = timer(1000);
          contador.subscribe( (n) =>{
          this.loadingR = false;
          this.rolForm.reset();
          this.toastr.info('El Rol fue actualizado con exito!', 'Rol Actualizado!');

          const contador = timer(500);
          contador.subscribe( (n) =>{
          this.router.navigate(['/persona-estudio']);
        }); 
          });
      })
    } else {
      this.loadingR = true;      
        this.RolService.guardarRol(rol).subscribe(data => {   

         
          const contador = timer(1000);
          contador.subscribe( (n) =>{
          this.loadingR = false;
          this.rolForm.reset();
          this.toastr.success('El Rol fue registrado con exito!', 'Rol Registrado!'); 

          const contador = timer(500);
          contador.subscribe( (n) =>{
          this.router.navigate(['/persona-estudio']);
        }); 
              
          });
     
      }, error => {
        console.log(error);
        this.toastr.error('No se pudieron registrar los datos!', 'Error de registrado');
        this.rolForm.reset();
      })
    }
  }
//editar
  editar() {

    if (this.id !== null) {

      this.titulo = 'Editar Rol';
      this.RolService.obtenerIdRol(this.id).subscribe(data => {
        this.rolForm.setValue({         
          Nombre: data.Nombre,  
          Password: data.Password,
          Rol : data.Rol,      
        })
      })
    }
  }

    //registrar estudio
    agregarEstudio() {

      const estudio: NivelEstudioModel = {      
        Nombre: this.estudioForm.get('Nombre')?.value,    
     
      }
  
      console.log(estudio);
      //si el id es null quiere decir que s eva a guardas un nuevo dato de lo contrario es actualizar
      if (this.id !== null) {
        this.loadingE = true;
          this.NivelEstudioService.editarEstudio(this.id, estudio).subscribe(data => {

             const contador = timer(1000);
             contador.subscribe( (n) =>{
             this.loadingE = false;
             this.estudioForm.reset();
             this.toastr.info('Nivel de estudio actualizado con exito!', 'Nivel de Actualizado!');   
             
             const contador = timer(500);
             contador.subscribe( (n) =>{
             this.router.navigate(['/persona-estudio']);
           }); 
             });
        })
      } else {
          this.loadingE = true;
          this.NivelEstudioService.guardarEstudio(estudio).subscribe(data => {       
       
             const contador = timer(1000);
             contador.subscribe( (n) =>{
             this.loadingE = false;
             this.estudioForm.reset();
             this.toastr.success('Nivel de estudio fue registrado con exito!', 'Nivel de estudio Registrado!');

             const contador = timer(500);
             contador.subscribe( (n) =>{
             this.router.navigate(['/persona-estudio']);
           }); 
            });
              
        }, error => {
          console.log(error);
          this.toastr.error('No se pudieron registrar los datos!', 'Error de registrado');
          this.estudioForm.reset();
        })
      }
    }
    

  //editar
    editarEstudio() {
  
      if (this.id !== null) {
  
        this.tituloEstudio = 'Editar nivel de estudio';
        this.NivelEstudioService.obtenerIdEstudio(this.id).subscribe(data => {
          this.estudioForm.setValue({
            Nombre: data.Nombre,        
          })
        })
      }
    }
      //listar
  obtenerPersonas() {
    this._personaService.selectPersona().subscribe(data => {
      this.listadoPersonas = data;

    }, error => {
      console.log(error);
    })
  }

}
