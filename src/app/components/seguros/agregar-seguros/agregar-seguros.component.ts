

import { SeguroModel } from 'src/app/models/SeguroModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { interval, timer } from 'rxjs';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { SeguroService } from 'src/app/services/seguro.service';
import { ImpresoraService } from 'src/app/services/impresora.service';
import { ImpresoraModel } from 'src/app/models/ImpresoraModel';


@Component({
  selector: 'app-agregar-seguros',
  templateUrl: './agregar-seguros.component.html',
  styleUrls: ['./agregar-seguros.component.scss']
})
export class AgregarSegurosComponent implements OnInit {

  listadoSeguro = new Array<SeguroModel>();
  listadoImpresora = new Array<ImpresoraModel>();

  seguroForm: FormGroup;
  titulo = 'Crear Seguro';
  id: string | null;
  loading = false;


  constructor(private _SeguroService: SeguroService, private fb: FormBuilder,
    private toastr: ToastrService, 
    private _impresora: ImpresoraService, 
   
    private aRouter: ActivatedRoute,
    
  ){
    this.seguroForm = this.fb.group({

      impresoras: ['', Validators.required],
      TipoSeguro: ['', Validators.required],   
      Precio: ['', Validators.required],
      fechaActivacion: ['', Validators.required],
      fechaVencimiento: ['', Validators.required]   
    })    
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editar(); 
    this.obtenerImpresoras();
       
  }
  //registrar seguro
  agregarSeguro() {

    const seguro: SeguroModel = {

      Impresora: this.seguroForm.get('impresoras')?.value,
      TipoSeguro: this.seguroForm.get('TipoSeguro')?.value,
      Precio: this.seguroForm.get('Precio')?.value,
      FechaActivacion: this.seguroForm.get('fechaActivacion')?.value,
      FechaVencimiento: this.seguroForm.get('fechaVencimiento')?.value,    
    }

    seguro.FechaActivacion = new Date( seguro.FechaActivacion);
    seguro.FechaVencimiento = new Date( seguro.FechaVencimiento);

    console.log(seguro);
    //si el id es null quiere decir que s eva a guardas un nuevo dato de lo contrario es actualizar
    if (this.id !== null) {

       this.loading = true;  
        this._SeguroService.editarSeguro(this.id, seguro).subscribe(data => {
               
          const contador = timer(1000);
          contador.subscribe( (n) =>{
          this.loading = false;
          this.seguroForm.reset();
          this.toastr.info('El Seguro fue actualizado con exito!', 'Seguro Actualizado!');
          });
      })
    } else {

      //  const seguro = await _SeguroService.findOne();
      // if(seguro){
      //   return 
      // }
      this.loading = true;      
        this._SeguroService.guardarSeguro(seguro).subscribe(data => {   
            
          const contador = timer(1000);
          contador.subscribe( (n) =>{
          this.loading = false;
          this.seguroForm.reset();
          this.toastr.success('El Seguro fue registrado con exito!', 'Seguro Registrado!');       
          });
        
      }, error => {
        console.log(error);
        this.toastr.error('No se pudieron registrar los datos!', 'Error de registrado');
        this.seguroForm.reset();
      })
    }
  }
//editar
  editar() {

    if (this.id !== null) {

      this.titulo = 'Editar Seguro';
      this._SeguroService.obtenerIdSeguro(this.id).subscribe(data => {
        this.seguroForm.setValue({
          impresoras : data.Impresora,
          TipoSeguro: data.TipoSeguro,  
          Precio: data.Precio,   
          fechaActivacion: data.FechaActivacion,   
          fechaVencimiento: data.FechaVencimiento    
        })
      })
    }
  }
     //  listar
   obtenerImpresoras() {
        this._impresora.selectImpresora().subscribe(data => {
          this.listadoImpresora = data;
    
        }, error => {
          console.log(error);
        })
      }

}
