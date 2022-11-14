import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { ImpresoraModel } from 'src/app/models/ImpresoraModel';
import { ImpresoraService } from 'src/app/services/impresora.service';

@Component({
  selector: 'app-impresora',
  templateUrl: './impresora.component.html',
  styleUrls: ['./impresora.component.scss']
})
export class ImpresoraComponent implements OnInit {

    listadoImpresora = new Array<ImpresoraModel>();

  constructor(private _impresoraService: ImpresoraService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerImpresora();
  }

  //listar
  obtenerImpresora() {
    this._impresoraService.selectImpresora().subscribe(data => {
      this.listadoImpresora = data;

    }, error => {
      console.log(error);
    })
  }
  //eliminar
  eliminarImpresora(id: any) {    
    this._impresoraService.eliminarImpresora(id).subscribe(data => {
      this.toastr.error('La Imoresora fue eliminada con exito', 'Impresora eliminada');
      this.obtenerImpresora();
    }, error => {
      console.log(error);
    })
  }

}
