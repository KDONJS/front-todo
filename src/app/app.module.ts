import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { Error404Component } from './components/error404/error404.component';
import { AyudaTareasComponent } from './components/helper/ayuda-tareas/ayuda-tareas.component';
import { SingInComponent } from './components/helper/sing-in/sing-in.component';
import { SignUpComponent } from './components/helper/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    ToDoComponent,
    SideBarComponent,
    Error404Component,
    AyudaTareasComponent,
    SingInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
