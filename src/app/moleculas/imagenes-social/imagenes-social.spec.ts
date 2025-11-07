import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesSocial } from './imagenes-social';

describe('ImagenesSocial', () => {
  let component: ImagenesSocial;
  let fixture: ComponentFixture<ImagenesSocial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenesSocial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenesSocial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
