import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showSubMenu1: boolean = false;
  showSubMenu2: boolean = false;
  showSubMenu3: boolean = false;
  idioma: string = "Es";
  urlFlag:string = "assets/img/icons/flag-1.png";;

  es:string = "Español";
  en:string = "Ingles";
  urlEsFlag:string = "assets/img/icons/flag-1.png";
  urlEnFlag:string = "assets/img/icons/flag-2.png";
  constructor() { }
  
  ngOnInit(): void {

  }

  cambiarIdiomaEs(){
   
      this.es= "Español";
      this.en = "Ingles";
      this.idioma = "Es";
      this.urlFlag = "assets/img/icons/flag-1.png";
    
  }

  cambiarIdiomaEn(){
    
      this.es= "Spanish";
      this.en = "English";
      this.idioma = "En";
      this.urlFlag = "assets/img/icons/flag-2.png";
   
  }

}
