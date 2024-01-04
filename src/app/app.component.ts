import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CheckSampleComponent } from './check-sample/check-sample.component';
import { InitSampleComponent } from './init-sample/init-sample.component';
import { ChangeSampleComponent } from './change-sample/change-sample.component';
import { DestroySampleComponent } from './destroy-sample/destroy-sample.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    CheckSampleComponent,
    InitSampleComponent,
    ChangeSampleComponent,
    DestroySampleComponent,
  ],
})
export class AppComponent {
  isAliveDestroySample = true;

  disposeDestroySample() {
    this.isAliveDestroySample = false;
  }
}
