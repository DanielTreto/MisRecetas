import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroCalificacion } from './filtro-calificacion';

describe('FiltroCalificacion', () => {
  let component: FiltroCalificacion;
  let fixture: ComponentFixture<FiltroCalificacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroCalificacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroCalificacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
