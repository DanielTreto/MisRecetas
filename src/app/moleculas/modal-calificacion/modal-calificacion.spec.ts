import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCalificacion } from './modal-calificacion';

describe('ModalCalificacion', () => {
  let component: ModalCalificacion;
  let fixture: ComponentFixture<ModalCalificacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCalificacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCalificacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
