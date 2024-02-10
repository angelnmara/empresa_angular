import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaExamenComponent } from './respuesta-examen.component';

describe('RespuestaExamenComponent', () => {
  let component: RespuestaExamenComponent;
  let fixture: ComponentFixture<RespuestaExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespuestaExamenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RespuestaExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
