import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  title:string = "Conozcanos- Grupo Invertur";
  constructor() { }

  ngOnInit(): void {
  }

}
