import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule} from 'ngx-toastr';
import { PrincipalComponent } from './components/principal/principal.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonaComponent } from './components/persona/persona.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { EstudiosRolComponent } from './components/estudios-rol/estudios-rol.component';
import { FormularioPersonaComponent } from './components/persona/formulario-persona/formulario-persona.component';
import { FormularioEstudiosRolComponent } from './components/persona/formulario-estudios-rol/formulario-estudios-rol.component';
import { FormularioModulosComponent } from './components/persona/formulario-modulos/formulario-modulos.component';

import { HttpClientModule } from '@angular/common/http';
import { Impresion3dComponent } from './components/impresion3d/impresion3d.component';
import { RevisionesComponent } from './components/revisiones/revisiones.component';
import { RevisionesFinalizadasComponent } from './components/revisiones-finalizadas/revisiones-finalizadas.component';
import { AgregarImpresion3dComponent } from './components/impresion3d/agregar-impresion3d/agregar-impresion3d.component';
import { NabvarGeneralComponent } from './components/nabvar-general/nabvar-general.component';
import { RepuestosComponent } from './components/repuestos/repuestos.component';
import { AgregarRepuestosComponent } from './components/repuestos/agregar-repuestos/agregar-repuestos.component';
import { AgregarRevisionComponent } from './components/revisiones/agregar-revision/agregar-revision.component';
import { SegurosComponent } from './components/seguros/seguros.component';
import { AgregarSegurosComponent } from './components/seguros/agregar-seguros/agregar-seguros.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PageNotFoundComponent,
    LoginComponent,
    HeaderComponent,
    PersonaComponent,
    ModulosComponent,
    NabvarComponent,
    EstudiosRolComponent,
    FormularioPersonaComponent,
    FormularioEstudiosRolComponent,
    FormularioModulosComponent,
    Impresion3dComponent,
    RevisionesComponent,
    RevisionesFinalizadasComponent,
    AgregarImpresion3dComponent,
    NabvarGeneralComponent,
    RepuestosComponent,
    AgregarRepuestosComponent,
    AgregarRevisionComponent,
    SegurosComponent,
    AgregarSegurosComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
