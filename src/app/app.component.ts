import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IdiomaService } from './services/idioma/idioma.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  idiomaEsp:boolean = true;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

  }



  ngOnInit(): void {
  }

  
  //Metodo del Output
  selectedlang(eventoLang:any){
    this.idiomaEsp = eventoLang;
  }

}
