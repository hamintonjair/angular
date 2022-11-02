import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRepuestosComponent } from './agregar-repuestos.component';

describe('AgregarRepuestosComponent', () => {
  let component: AgregarRepuestosComponent;
  let fixture: ComponentFixture<AgregarRepuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarRepuestosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarRepuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
