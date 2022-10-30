import { NgModule } from '@angular/core';
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

const routes: Routes = [
  
  { path : 'login', component: LoginComponent },
  { path : 'principal', component: PrincipalComponent },
  { path : 'persona', component:PersonaComponent },
  { path : 'estudio', component: EstudiosRolComponent },
  { path : 'modulos', component: ModulosComponent },
  { path : 'formPersona', component: FormularioPersonaComponent },
  { path : 'formEstudioRol', component: FormularioEstudiosRolComponent },
  { path : 'formModulos', component: FormularioModulosComponent },
  
  { path : '', component: LoginComponent },
  { path :  "**",component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
