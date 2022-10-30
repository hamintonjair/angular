import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    FormularioModulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
