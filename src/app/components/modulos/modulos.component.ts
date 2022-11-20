import { Component, OnInit } from '@angular/core';
import { PermisosService } from 'src/app/services/permisos.service';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { PermisosModel } from 'src/app/models/PermisosModel';
@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit {

  listadoPermisos= new Array<PermisosModel>();

  constructor(private _permisosService: PermisosService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerPermisos();
  }

  //listar
  obtenerPermisos() {
    this._permisosService.selectPermisos().subscribe(data => {
      this.listadoPermisos = data;

    }, error => {
      console.log(error);
    })
  }
  //eliminar
  eliminarPersona(id: any) {    
    this._permisosService.eliminarPermisos(id).subscribe(data => {
      this.toastr.error('El permiso fue eliminado con exito', 'Permiso eliminado');
      this.obtenerPermisos();
    }, error => {
      console.log(error);
    })
  }
}
