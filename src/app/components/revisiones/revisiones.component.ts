import { RevisionesService } from './../../services/revisiones.service';
import { RevisionesModel } from './../../models/RevisionesModel';
import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-revisiones',
  templateUrl: './revisiones.component.html',
  styleUrls: ['./revisiones.component.scss']
})
export class RevisionesComponent implements OnInit {

  listadoRevision = new Array<RevisionesModel>();
 

  constructor(             
              private revisionService: RevisionesService,              
              private toastr: ToastrService ) { }

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
