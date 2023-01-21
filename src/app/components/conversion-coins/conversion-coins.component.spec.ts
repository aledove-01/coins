import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionCoinsComponent } from './conversion-coins.component';

describe('ConversionCoinsComponent', () => {
  let component: ConversionCoinsComponent;
  let fixture: ComponentFixture<ConversionCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionCoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversionCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
