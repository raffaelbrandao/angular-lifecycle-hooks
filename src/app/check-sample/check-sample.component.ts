import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  standalone: true,
  imports: [],
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css',
})
export class CheckSampleComponent
  implements
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit
{
  quantity: number = 0;

  constructor() {
    console.log('constructor');
  }

  increase() {
    this.quantity += 1;
  }

  decrement() {
    this.quantity -= 1;
  }

  ngDoCheck(): void {
    console.log(`DoCheck - ${this.quantity}`);
  }
  ngAfterContentChecked(): void {
    console.log(`AfterContentChecked - ${this.quantity}`);
  }
  ngAfterContentInit(): void {
    console.log(`AfterContentInit - ${this.quantity}`);
  }
  ngAfterViewChecked(): void {
    console.log(`AfterViewChecked - ${this.quantity}`);
  }
  ngAfterViewInit(): void {
    console.log(`AfterViewInit - ${this.quantity}`);
  }
}
