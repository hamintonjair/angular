import { Component, OnInit } from '@angular/core';
import { RevisionesService } from './../../services/revisiones.service';
import { RevisionesModel } from './../../models/RevisionesModel';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-revisiones-finalizadas',
  templateUrl: './revisiones-finalizadas.component.html',
  styleUrls: ['./revisiones-finalizadas.component.scss']
})
export class RevisionesFinalizadasComponent implements OnInit {

  listadoRevision = new Array<RevisionesModel>();

  constructor(
    private revisionService: RevisionesService,              
    private toastr: ToastrService 
  ) { }

  ngOnInit(): void {
    this.obtenerRevisiones();
  }
  
  obtenerRevisiones() {    
    this.revisionService.selectRevisiones().subscribe(data => {
      this.listadoRevision = data;
    }, error => {
      console.log(error);
    })
  }
    //eliminar
    eliminarRevision(id: any) {    
      this.revisionService.eliminarRevisiones(id).subscribe(data => {
        this.toastr.error('La revisión fue eliminado con exito', 'Revisión eliminado');
        this.obtenerRevisiones();
      }, error => {
        console.log(error);
      })
  }

}
