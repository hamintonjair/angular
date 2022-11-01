
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
const routes: Routes = [
  
  { path : 'login', component: LoginComponent },
  { path : 'principal', component: PrincipalComponent },
  { path : 'persona', component:PersonaComponent },
  { path : 'agregar-persona', component: FormularioPersonaComponent },
  { path : 'persona-estudio', component: EstudiosRolComponent },
  { path : 'persona-modulos', component: ModulosComponent },
  { path : 'agregar-estudio-rol', component: FormularioEstudiosRolComponent },
  { path : 'agregar-modulo', component: FormularioModulosComponent },
  { path : 'impresion3d', component: Impresion3dComponent},
  { path : 'agregar-impresion3d', component: AgregarImpresion3dComponent},
  
  { path : '', component: LoginComponent },
  { path :  "**",component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
