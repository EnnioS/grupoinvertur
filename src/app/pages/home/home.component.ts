import { Component, OnInit, Renderer2 } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';


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
  state: string = 'rotated';
  constructor() { }

  ngOnInit(): void { this.rotate()}

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
}
}
