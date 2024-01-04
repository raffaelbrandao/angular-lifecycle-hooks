import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitSampleComponent } from './init-sample.component';

describe('InitSampleComponent', () => {
  let component: InitSampleComponent;
  let fixture: ComponentFixture<InitSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitSampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
