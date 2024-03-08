import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { Error404Component } from './components/error404/error404.component';
import { AyudaTareasComponent } from './components/helper/ayuda-tareas/ayuda-tareas.component';
import { SingInComponent } from './components/helper/sing-in/sing-in.component';
import { SignUpComponent } from './components/helper/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'Todo', component: ToDoComponent },
  {path: 'ayudaTareas', component: AyudaTareasComponent},
  {path: 'login', component: SingInComponent},
  {path: 'registro', component: SignUpComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
