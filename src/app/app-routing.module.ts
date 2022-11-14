


import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { PersonaComponent } from './components/persona/persona.component';
import { EstudiosRolComponent } from './components/estudios-rol/estudios-rol.component';
import { ModulosComponent  } from './components/modulos/modulos.component';
import { FormularioPersonaComponent } from './components/persona/formulario-persona/formulario-persona.component';
import { FormularioEstudiosRolComponent } from './components/persona/formulario-estudios-rol/formulario-estudios-rol.component';
import { FormularioModulosComponent } from './components/persona/formulario-modulos/formulario-modulos.component';
import { Impresion3dComponent } from './components/impresion3d/impresion3d.component';
import { AgregarImpresion3dComponent } from './components/impresion3d/agregar-impresion3d/agregar-impresion3d.component';
import { RepuestosComponent } from './components/repuestos/repuestos.component';
import { AgregarRepuestosComponent } from './components/repuestos/agregar-repuestos/agregar-repuestos.component';
import { RevisionesComponent } from './components/revisiones/revisiones.component';
import { AgregarRevisionComponent } from './components/revisiones/agregar-revision/agregar-revision.component';
import { RevisionesFinalizadasComponent } from './components/revisiones-finalizadas/revisiones-finalizadas.component';
import { SegurosComponent } from './components/seguros/seguros.component';
import { AgregarSegurosComponent } from './components/seguros/agregar-seguros/agregar-seguros.component';
import {ImpresoraComponent} from './components/impresora/impresora.component';
import { AgregarImpresoraComponent } from './components/impresora/agregar-impresora/agregar-impresora.component'
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  
  { path : 'login', component: LoginComponent },
  { path : 'header', component: HeaderComponent },
  { path : 'principal', component: PrincipalComponent },
  { path : 'persona', component:PersonaComponent },
  { path : 'agregar-persona', component: FormularioPersonaComponent },
  { path : 'editar-persona/:id', component: FormularioPersonaComponent },
  { path : 'persona-estudio', component: EstudiosRolComponent },
  { path : 'persona-modulos', component: ModulosComponent },
  { path : 'agregar-estudio-rol', component: FormularioEstudiosRolComponent },
  { path : 'editar-estudio/:id', component: FormularioEstudiosRolComponent },
  { path : 'agregar-modulo', component: FormularioModulosComponent },
  { path : 'impresion3d', component: Impresion3dComponent},
  { path : 'agregar-impresion3d', component: AgregarImpresion3dComponent},
  { path : 'repuestos', component: RepuestosComponent}, 
  { path : 'agregar-repuestos', component: AgregarRepuestosComponent},
  { path : 'editar-repuestos/:id', component: AgregarRepuestosComponent},
  { path : 'revisiones', component: RevisionesComponent},
  { path : 'agregar-revision', component: AgregarRevisionComponent},
  { path : 'revisiones-finalizadas', component: RevisionesFinalizadasComponent},
  { path : 'seguros', component: SegurosComponent},
  { path : 'agregar-seguros', component: AgregarSegurosComponent},
  { path : 'editar-seguro/:id', component: AgregarSegurosComponent},
  { path : 'impresora', component: ImpresoraComponent},
  { path : 'agregar-impresora', component: AgregarImpresoraComponent},
  { path : 'editar-impresora/:id', component: AgregarImpresoraComponent},
  { path : '', component: LoginComponent },
  { path : "**",component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
