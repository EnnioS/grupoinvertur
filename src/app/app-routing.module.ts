import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { NosotrosComponent } from "./pages/nosotros/nosotros.component";
import { ConsumoComponent } from "./pages/consumo/consumo.component";
import { FarmaceuticaComponent } from "./pages/farmaceutica/farmaceutica.component";
import { TurismoComponent } from "./pages/turismo/turismo.component";
import { PublicidadComponent } from "./pages/publicidad/publicidad.component";
import { BienesRaicesComponent } from "./pages/bienes-raices/bienes-raices.component";
import {ContactoComponent} from "./pages/contacto/contacto.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'consumo', component: ConsumoComponent},
  {path: 'farmaceutica', component: FarmaceuticaComponent},
  {path: 'turismo', component: TurismoComponent},
  {path: 'publicidad', component: PublicidadComponent},
  {path: 'bienes-raices', component: BienesRaicesComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', pathMatch:'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
    //RouterModule.forRoot(app_routes,{useHash: true})//useHash es para infdicarles que no existen carpetas con el nmbe de la ruta, cuando se agregue aun servidor Linux habrá que quitarlo y configurar el htaccess para decirle al servido que todas las rutas pasen por el index.html
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
