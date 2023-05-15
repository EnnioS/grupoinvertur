import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showSubMenu1: boolean = false;
  showSubMenu2: boolean = false;
  constructor() { }
  
  ngOnInit(): void {

  }

}
