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
  {path: 'inicio', title:"Inicio - Grupo Invertur", component: HomeComponent },
  {path: 'nosotros', title:"Conózcanos - Grupo Invertur", component: NosotrosComponent},
  {path: 'consumo', title:"Consumo - Grupo Invertur", component: ConsumoComponent},
  {path: 'farmaceutica', title:"Farmacéutica - Grupo Invertur", component: FarmaceuticaComponent},
  {path: 'turismo', title:"turismo - Grupo Invertur", component: TurismoComponent},
  {path: 'publicidad', title:"Publicidad - Grupo Invertur", component: PublicidadComponent},
  {path: 'bienes-raices', title:"Bienes raíces - Grupo Invertur", component: BienesRaicesComponent},
  {path: 'contacto', title:"Contáctanos - Grupo Invertur", component: ContactoComponent},
  {path:'',redirectTo:'inicio', pathMatch:'full'},
  {path:'**', redirectTo:'inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
    //RouterModule.forRoot(routes,{useHash: true})//useHash es para infdicarles que no existen carpetas con el nmbe de la ruta, cuando se agregue aun servidor Linux habrá que quitarlo y configurar el htaccess para decirle al servido que todas las rutas pasen por el index.html
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
}
