import { RepuestosModel } from 'src/app/models/RepuestosModel';
import { Component, OnInit } from '@angular/core';
import { RepuestosService } from 'src/app/services/repuestos.service';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.scss']

})
export class RepuestosComponent implements OnInit {

  listadoRepuestos = new Array<RepuestosModel>();

  constructor(private repuestosService: RepuestosService, private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.obtenerRepuestos();
  }

  obtenerRepuestos() {    
    this.repuestosService.selectRepuestos().subscribe(data => {
      this.listadoRepuestos = data;
    }, error => {
      console.log(error);
    })
  }
    //eliminar
    eliminarRepuestos(id: any) {    
      this.repuestosService.eliminarRepuestos(id).subscribe(data => {
        this.toastr.error('El repuesto fue eliminada con exito', 'Repuesto eliminada');
        this.obtenerRepuestos();
      }, error => {
        console.log(error);
      })
    }

}
