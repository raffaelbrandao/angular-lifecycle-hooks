import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroySampleComponent } from './destroy-sample.component';

describe('DestroySampleComponent', () => {
  let component: DestroySampleComponent;
  let fixture: ComponentFixture<DestroySampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestroySampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestroySampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
