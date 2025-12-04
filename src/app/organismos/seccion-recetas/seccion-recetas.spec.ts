import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionRecetas } from './seccion-recetas';

describe('SeccionRecetas', () => {
  let component: SeccionRecetas;
  let fixture: ComponentFixture<SeccionRecetas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionRecetas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionRecetas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
