import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRepuestosComponent } from './formulario-repuestos.component';

describe('FormularioRepuestosComponent', () => {
  let component: FormularioRepuestosComponent;
  let fixture: ComponentFixture<FormularioRepuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioRepuestosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRepuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
