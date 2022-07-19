import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PORTFOLIOComponent } from './portfolio.component';

describe('PORTFOLIOComponent', () => {
  let component: PORTFOLIOComponent;
  let fixture: ComponentFixture<PORTFOLIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PORTFOLIOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PORTFOLIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
