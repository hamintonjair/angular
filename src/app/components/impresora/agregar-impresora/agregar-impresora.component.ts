import { error } from 'jquery';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImpresoraModel} from 'src/app/models/ImpresoraModel';
import { ImpresoraService} from 'src/app/services/impresora.service';
import { formatDate } from '@angular/common';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { interval, timer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-impresora',
  templateUrl: './agregar-impresora.component.html',
  styleUrls: ['./agregar-impresora.component.scss']
})
export class AgregarImpresoraComponent implements OnInit {

  listadoImpresora = new Array<ImpresoraModel>();
  impresoraForm: FormGroup;
  titulo = 'Crear Impresora';
  id: string | null;
  loading = false;

   constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private impresoraService: ImpresoraService,
    private aRouter: ActivatedRoute,
    
  ){
    this.impresoraForm = this.fb.group({

      Cliente: ['', Validators.required],
      Correo: ['', Validators.required],
      Nombre: ['', Validators.required],
      Marca: [''],
      Placa: ['', Validators.required],
      Pais: [''],
      AnoModelo: [''],
      TipoImpresora: ['', Validators.required],
      Velocidadimpresion: ['', Validators.required],
      VolumenImpresion: ['', Validators.required],
      FechaIngreso: ['', Validators.required],
      Detalles: ['', Validators.required],   

    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editar();
  }

  agregarImpresora() {

    const imp: ImpresoraModel = {
      Cliente: this.impresoraForm.get('Cliente')?.value,   
      Correo: this.impresoraForm.get('Correo')?.value,   
      Nombre: this.impresoraForm.get('Nombre')?.value,
      Marca: this.impresoraForm.get('Marca')?.value,
      Placa: this.impresoraForm.get('Placa')?.value,
      Pais: this.impresoraForm.get('Pais')?.value,
      AnoModelo: this.impresoraForm.get('AnoModelo')?.value,
      TipoImpresora: this.impresoraForm.get('TipoImpresora')?.value,
      Velocidadimpresion: this.impresoraForm.get('Velocidadimpresion')?.value,      
      VolumenImpresion: this.impresoraForm.get('VolumenImpresion')?.value,
      FechaIngreso: this.impresoraForm.get('FechaIngreso')?.value,
      Detalles: this.impresoraForm.get('Detalles')?.value,    
    } 
    imp.AnoModelo = new Date( imp.AnoModelo);
    imp.FechaIngreso = new Date( imp.FechaIngreso);
   
    console.log(imp);

     //si el id es null quiere decir que s eva a guardas un nuevo dato de lo contrario es actualizar
     if (this.id !== null) {

        this.loading = true;  
        this.impresoraService.editarImpresora(this.id, imp).subscribe(data => {
        const contador = timer(1000);
        contador.subscribe( (n) =>{
        this.loading = false;
        this.impresoraForm.reset();
        this.toastr.info('La impresora fue actualizado con exito!', 'Impresora Actualizado!');
      });
     
    })
    } else {
        this.loading = true;  
        this.impresoraService.guardarImpresora(imp).subscribe(data => {     
          const contador = timer(1000);
          contador.subscribe( (n) =>{
          this.loading = false;
          this.impresoraForm.reset();
          this.toastr.success('La impresora fue registrado con exito!', 'Impresora Registrada!');
        });      
        
      }, error => {
        console.log(error);
        this.toastr.error('No se pudieron registrar los datos!', 'Error de registrado');
        this.impresoraForm.reset();
      })
    }
  }
  //editar
  editar(){
    if (this.id !== null) {
      this.titulo = 'Editar Impresora';
      this.impresoraService.obtenerIdImpresora(this.id).subscribe(data => {

        console.log(data);

        this.impresoraForm.setValue({

          Cliente:data.Cliente, 
          Correo:data.Correo, 
          Nombre:data.Nombre,
          Marca:data.Marca,
          Placa:data.Placa,
          Pais:data.Pais,
          AnoModelo:data.AnoModelo,
          TipoImpresora:data.TipoImpresora,
          Velocidadimpresion:data.Velocidadimpresion,
          VolumenImpresion:data.VolumenImpresion,
          FechaIngreso:data.FechaIngreso,
          Detalles:data.Detalles,  

        })

       
      })
    }
  }

}
