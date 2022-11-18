import { Component, OnInit } from '@angular/core';
import { Impresion3dService } from 'src/app/services/impresion3d.service';
import { Impresion3d } from 'src/app/models/Impresion3d';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-impresion3d',
  templateUrl: './impresion3d.component.html',
  styleUrls: ['./impresion3d.component.scss']
})
export class Impresion3dComponent implements OnInit {
  listadoImpresion3d = new Array<Impresion3d>();
  constructor(private impresion3dService: Impresion3dService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerImpresion3d(); 
  }
  obtenerImpresion3d() {    
    this.impresion3dService.selectImpresion3d().subscribe(data => {
      this.listadoImpresion3d = data;
    }, error => {
      console.log(error);
    })
  }
  eliminarImpresion3d(Id: any) {    
    this.impresion3dService.eliminarImpresion3d(Id).subscribe(data => {
      this.toastr.error('El repuesto fue eliminada con exito', 'Repuesto eliminada');
      this.obtenerImpresion3d();
    }, error => {
      console.log(error);
    })
  }
  
}
