import { Component, Input, OnInit } from '@angular/core';
import { IdiomaService } from '../services/idioma/idioma.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anio:Date = new Date();
  @Input() idiomaEs!:boolean;

  textBtnContact = "CONTACTANOS";
  footerText = "Grupo Invertur, Todos los derechos reservados - Copyright© " +  this.anio.getFullYear();
  constructor(private idiomaService: IdiomaService) {  }
  

  ngOnInit(): void {
  }

  changeLan(){
    if(this.idiomaEs){
      this.textBtnContact = "CONTACTANOS";
      this.footerText = "Grupo Invertur, Todos los derechos reservados - Copyright© " +  this.anio.getFullYear();
    }else if(!this.idiomaEs){
      this.textBtnContact = "CONTACT US";
      this.footerText = "Grupo Invertur, All right reserved - Copyright© " +  this.anio.getFullYear();
    }
  }
  

}
