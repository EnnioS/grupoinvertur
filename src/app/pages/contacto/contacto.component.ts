import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
nombre!:string;
email!:string;
asunto!:string;
texto!:string;
  constructor() { }

  ngOnInit(): void { 
  }

}
