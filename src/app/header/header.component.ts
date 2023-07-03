import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, Input } from '@angular/core';
import { IdiomaService } from '../services/idioma/idioma.service';
import { Router } from '@angular/router';
import { NosotrosComponent } from '../pages/nosotros/nosotros.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  //Mostrar submenu
  showSubMenu1: boolean = false;
  showSubMenu2: boolean = false;
  showSubMenu3: boolean = false;

  menuMobileOpen:boolean = false;


  //cambio de idioma
  idioma!: string;
  urlFlag!:string;

  es:string = "Es";
  en:string = "En";
  es_name:string = "Español";
  en_name:string = "Ingles";
  urlEsFlag:string = "assets/img/icons/flag-1.png";
  urlEnFlag:string = "assets/img/icons/flag-2.png";

  textMenu = {
    inicio:"Inicio",
    nosotros:"Nosotros",
    negocios:"Negocios",
    alianzas:"Alianzas",
    contacto:"CONTACTO"
  };

  textSubMenu = {
      consumo:"Consumo",
      farmaceutica:"Farmaceutica",
      turismo:"Turismo",
      publicidad:"Publicidad",
      bienes_raices:"Bienes Raíces",
  };

  

  constructor(private router: Router, public translate: TranslateService ) { 
    this.translate.addLangs(['en','es']);
    this.translate.setDefaultLang('es');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.translate.getLangs());
   
  }
  
  ngOnInit(): void {
    // console.log(this.translate.currentLang);
    this.idioma = "Es";
    this.urlFlag = "assets/img/icons/flag-1.png";
  }


  
  switchLang(lang:string){
    this.translate.use(lang);
    if(lang == "en"){
      this.idioma = this.en;
      this.urlFlag = this.urlEnFlag;
    }else{
      this.idioma = this.es;
      this.urlFlag = this.urlEsFlag;
    }


  }

  mostrarMenuMobile(){
    if(this.menuMobileOpen){
      this.menuMobileOpen =false;
    }else{
      this.menuMobileOpen =true;
    }
  }

  closeMenMoble(){
    this.menuMobileOpen =false;
  }

  showSubMenuMovil1(){
    if(this.showSubMenu1){
      this.showSubMenu1 =false;
    }else{
      this.showSubMenu1 =true;
    }
  }

  showSubMenuMovil2(){
    if(this.showSubMenu2){
      this.showSubMenu2 =false;
    }else{
      this.showSubMenu2 =true;
    }
  }
  
    
  
}
