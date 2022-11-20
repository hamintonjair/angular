import { Component, OnInit } from '@angular/core';
import { SeguroModel } from 'src/app/models/SeguroModel';
import { SeguroService } from 'src/app/services/seguro.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.scss']
})
export class SegurosComponent implements OnInit {

  listadoSeguro = new Array<SeguroModel>();

  constructor(private _seguroService: SeguroService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerSeguro();
  }

   //listar
   obtenerSeguro() {
    this._seguroService.selectSeguro().subscribe(data => {
      this.listadoSeguro = data;

    }, error => {
      console.log(error);
    })
  }
  //eliminar
  eliminarSeguro(id: any) {    
    this._seguroService.eliminarSeguro(id).subscribe(data => {
      this.toastr.error('El seguro fue eliminada con exito', 'Seguro eliminada');
      this.obtenerSeguro();
    }, error => {
      console.log(error);
    })
  }

}
