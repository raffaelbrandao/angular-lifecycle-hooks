import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSampleComponent } from './change-sample.component';

describe('ChangeSampleComponent', () => {
  let component: ChangeSampleComponent;
  let fixture: ComponentFixture<ChangeSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeSampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
