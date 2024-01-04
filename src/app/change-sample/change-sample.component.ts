import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-change-sample',
  standalone: true,
  imports: [],
  templateUrl: './change-sample.component.html',
  styleUrl: './change-sample.component.css',
})
export class ChangeSampleComponent implements OnChanges {
  @Input() name: string = '';

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`OnChanges - ${this.name}`);
  }
}
