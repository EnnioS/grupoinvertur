import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienes-raices',
  templateUrl: './bienes-raices.component.html',
  styleUrls: ['./bienes-raices.component.css']
})
export class BienesRaicesComponent implements OnInit {
  title:string="Bienes raíces - grupo Invertur";
  constructor() { }

  ngOnInit(): void {
  }

}
