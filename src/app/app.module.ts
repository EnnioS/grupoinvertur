import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ConsumoComponent } from './pages/consumo/consumo.component';
import { FarmaceuticaComponent } from './pages/farmaceutica/farmaceutica.component';
import { TurismoComponent } from './pages/turismo/turismo.component';
import { PublicidadComponent } from './pages/publicidad/publicidad.component';
import { BienesRaicesComponent } from './pages/bienes-raices/bienes-raices.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './utilities/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    ConsumoComponent,
    FarmaceuticaComponent,
    TurismoComponent,
    PublicidadComponent,
    BienesRaicesComponent,
    ContactoComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
