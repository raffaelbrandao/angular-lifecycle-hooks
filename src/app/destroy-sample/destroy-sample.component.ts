import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-destroy-sample',
  standalone: true,
  imports: [],
  templateUrl: './destroy-sample.component.html',
  styleUrl: './destroy-sample.component.css'
})
export class DestroySampleComponent implements OnDestroy{
  constructor(){
    console.log('constructor');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
}
