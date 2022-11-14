import { timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { RepuestosModel } from 'src/app/models/RepuestosModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RepuestosService } from 'src/app/services/repuestos.service';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { error } from 'jquery';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-agregar-repuestos',
  templateUrl: './agregar-repuestos.component.html',
  styleUrls: ['./agregar-repuestos.component.scss']
})
export class AgregarRepuestosComponent implements OnInit {

  listadoRespuesto = new Array<RepuestosModel>();
  RepuestosForm: FormGroup;
  titulo = 'Crear Repuesto';
  id: string | null;
  loading = false;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private repuestosService: RepuestosService,
    private aRouter: ActivatedRoute,
    
  ){
    this.RepuestosForm = this.fb.group({

      Nombre: ['', Validators.required],
      Cantidad: ['', Validators.required],
      Precio: ['', Validators.required],
      imagen: ['', Validators.nullValidator],     

    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editar();
  }
  //registrar repuestos
  agregarRepuestos() {

    const rep: RepuestosModel = {
      Detalle: this.RepuestosForm.get('Nombre')?.value,
      Cantidad: this.RepuestosForm.get('Cantidad')?.value,
      Precio: this.RepuestosForm.get('Precio')?.value,     
      Imagen: this.RepuestosForm.get('imagen')?.value,     
    }
   
    console.log(rep);
    //si el id es null quiere decir que s eva a guardas un nuevo dato de lo contrario es actualizar
    if (this.id !== null) {

        this.loading = true;  
        this.repuestosService.editarRepuestos(this.id, rep).subscribe(data => {
          const contador = timer(1000);
          contador.subscribe( (n) =>{
          this.loading = false;
          this.RepuestosForm.reset();
          this.toastr.info('El repuesto fue actualizado con exito!', 'Repuesto Actualizado!');
        });
       
      })
    }else {
        this.loading = true;  
        this.repuestosService.guardarRepuestos(rep).subscribe(data => {     
          const contador = timer(1000);
          contador.subscribe( (n) =>{
          this.loading = false;
          this.RepuestosForm.reset();
          this.toastr.success('El repuesto fue registrado con exito!', 'Repuesto Registrado!');
        });      
        
      }, error => {
        console.log(error);
        this.toastr.error('No se pudieron registrar los datos!', 'Error de registrado');
        this.RepuestosForm.reset();
      })
    }
  }
//editar
  editar() {

    if (this.id !== null) {

      this.titulo = 'Editar repuesto';
      this.repuestosService.obtenerIdRepuestos(this.id).subscribe(data => {
        console.log(data);
        this.RepuestosForm.setValue({

          Nombre: data.Detalle,
          Cantidad: data.Cantidad,
          Precio: data.Precio,
          imagen: data.Imagen,          
        })
      })
    }
  }
}
