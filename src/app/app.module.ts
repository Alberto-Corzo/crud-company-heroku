import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './pages/crud/crud.component';
import { RegistrarFormularioComponent } from './pages/crud/registrar-formulario/registrar-formulario.component';
import { ActualizarFormularioComponent } from './pages/crud/actualizar-formulario/actualizar-formulario.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
//Import manual para servicios HTTP
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    RegistrarFormularioComponent,
    ActualizarFormularioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
