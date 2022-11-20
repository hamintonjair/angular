import { Component, OnInit } from '@angular/core';
import { Impresion3d } from 'src/app/models/Impresion3d';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';//permite crear una agrupacion de los campos y los envia al modelo y el validator sirve para hacer validaciones
import { ToastrService } from 'ngx-toastr';//permite mostrar los msjs al usuario
import { Impresion3dService } from 'src/app/services/impresion3d.service';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-agregar-impresion3d',
  templateUrl: './agregar-impresion3d.component.html',
  styleUrls: ['./agregar-impresion3d.component.scss']
})
export class AgregarImpresion3dComponent implements OnInit {

  listadoImpresion3d = new Array<Impresion3d>();
  impresion3dForm: FormGroup;
  titulo = 'Crear Registro de Impresión 3D';
  Id: string | null;
  
  loading = false;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private impresion3dService: Impresion3dService,
    private aRouter: ActivatedRoute,
       
  ){
    this.impresion3dForm = this.fb.group({

      Cliente: ['', Validators.required],
      Identificacion: ['', Validators.required],
      Cantidad: ['', Validators.required],
      TipoImpre: ['', Validators.required],
      Precio: ['', Validators.required]
      

    })
    this.Id = this.aRouter.snapshot.paramMap.get('Id');
  }

  ngOnInit(): void {
    this.editar();
   
  }
  //registrar funcionario
  agregarImpresion3d() {

    const imp: Impresion3d = {
      Cliente: this.impresion3dForm.get('Cliente')?.value,
      Identificacion: this.impresion3dForm.get('Identificacion')?.value,
      Cantidad: this.impresion3dForm.get('Cantidad')?.value,
      TipoImpre: this.impresion3dForm.get('TipoImpre')?.value,
      Precio: this.impresion3dForm.get('Precio')?.value,      
    }    
   
    console.log(imp);
    //si el id es null quiere decir que s eva a guardas un nuevo dato de lo contrario es actualizar
    if (this.Id !== null) {

        this.loading = true;  
        this.impresion3dService.editarImpresion3d(this.Id, imp).subscribe(data => {
          const contador = timer(1000);
          contador.subscribe( (n) =>{
          this.loading = false;
          this.impresion3dForm.reset();
          this.toastr.info('El Registro de impresión fue actualizado con exito!', 'Fegistro de impresión Actualizado!');
        });
       
      })
    } else {
        this.loading = true;  
        this.impresion3dService.guardarImpresion3d(imp).subscribe(data => {     
          const contador = timer(1000);
          contador.subscribe( (n) =>{
          this.loading = false;
          this.impresion3dForm.reset();
          this.toastr.success('La impresión fue registrada con exito!', 'Impresión Registrada!');
        });      
        
      }, error => {
        console.log(error);
        this.toastr.error('No se pudieron registrar los datos de la impresión!', 'Error de registrado');
        this.impresion3dForm.reset();
      })
    }
  }
//editar
  editar() {

    if (this.Id !== null) {

      this.titulo = 'Editar funcionario';
      this.impresion3dService.obtenerIdImpresion3d(this.Id).subscribe(data => {

        this.impresion3dForm.setValue({

          Cliente: data.Cliente,
          Identificacion: data.Identificacion,
          Cantidad: data.Cantidad,
          TipoImpre: data.TipoImpre,
          Precio: data.Precio,
        })
      })
    }
  }
  //listado niveles d eestudios

}
