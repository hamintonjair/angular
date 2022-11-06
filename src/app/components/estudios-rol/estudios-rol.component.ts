
import { Component, OnInit } from '@angular/core';
import { NivelEstudioModel } from 'src/app/models/NivelEstudioModel';
import { NivelEstudioService } from 'src/app/services/nivel-estudio.service';
import { RolService } from 'src/app/services/rol.service';
import { RolModel } from 'src/app/models/RolModel';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-estudios-rol',
  templateUrl: './estudios-rol.component.html',
  styleUrls: ['./estudios-rol.component.scss'],
  
})
export class EstudiosRolComponent implements OnInit {

  listadoNivelEstudio = new Array<NivelEstudioModel>();
  listadoRol = new Array<RolModel>();

  constructor(private NivelEstudioService: NivelEstudioService,
                       private RolService : RolService,
                       private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerEstudios();
    this.obtenerRol();
  }

  //listar
  obtenerEstudios() {
    this.NivelEstudioService.selectEstudio().subscribe(data => {
      this.listadoNivelEstudio = data;

    }, error => {
      console.log(error);
    })
  }

  //eliminar
  eliminarEstudio(id: any) {    
    this.NivelEstudioService.eliminarEstudio(id).subscribe(data => {
      this.toastr.error('El estudio fue eliminado con exito', 'Nivel de estudio eliminada');
      this.obtenerEstudios();
    }, error => {
      console.log(error);
    })
  }

   //listar
   obtenerRol() {
    this.RolService.selectRol().subscribe(data => {
      this.listadoRol = data;

    }, error => {
      console.log(error);
    })
  }

  //eliminar
  eliminarRol(id: any) {    
    this.RolService.eliminarRol(id).subscribe(data => {
      this.toastr.error('El Rol fue eliminado con exito', 'Rol eliminado');
      this.obtenerRol();
    }, error => {
      console.log(error);
    })
  }

}
