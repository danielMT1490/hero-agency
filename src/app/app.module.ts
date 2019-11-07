import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importamos los modulos necesarios para hacer os fromularios
import { FormsModule } from "@angular/forms";
//Componentes
import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
