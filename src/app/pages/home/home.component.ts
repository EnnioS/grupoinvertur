import { Component, Input, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { IdiomaService } from 'src/app/services/idioma/idioma.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
      // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'scale(1,1)', })),
      
      state('rotated', style({ transform: 'scalex(-1)'})),
      transition('rotated => default', animate('100ms')),
      transition('default => rotated', animate('100ms'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  idiomaEs!: boolean;

  uNegocios = {
    consumo:"Consumo",
    farmaceutica:"Farmaceutica",
    turismo:"Turismo",
    publicidad:"Publicidad",
    bienes_raices:"Bienes Raíces",
};

@Input() idioma!:string;

  state: string = 'rotated';
  constructor(private idiomaService: IdiomaService) { }
  

  ngOnInit(): void { this.rotate()
    
    this.idiomaService.getIdiomaFromSevice().subscribe(idiomaEs =>{
      this.idiomaEs = idiomaEs;
    });

    this.changeLang();
  }

  changeLang(){
    if(this.idiomaEs){
      
      this.uNegocios.consumo = "Consumo";
      this.uNegocios.farmaceutica = "Farmaceutica";
      this.uNegocios.turismo = "Turismo";
      this.uNegocios.publicidad = "Publicidad";
      this.uNegocios.bienes_raices = "Bienes Raíces";
    }else if(!this.idiomaEs){
      this.uNegocios.consumo = "Consumption";
      this.uNegocios.farmaceutica = "Pharmaceutical";
      this.uNegocios.turismo = "Tourism";
      this.uNegocios.publicidad = "Advertaisong";
      this.uNegocios.bienes_raices = "Real Estate";
    }
  }
    
  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

 
}
