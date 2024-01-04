import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init-sample',
  standalone: true,
  imports: [],
  templateUrl: './init-sample.component.html',
  styleUrl: './init-sample.component.css',
})
export class InitSampleComponent implements OnInit {
  name: string = 'World';
  constructor() {
    console.log('constructor');
  }
  ngOnInit(): void {
    this.name = `Hello ${this.name}`;
    console.log(`OnInit - ${this.name}`);
  }
}
