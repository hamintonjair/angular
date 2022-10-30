import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioModulosComponent } from './formulario-modulos.component';

describe('FormularioModulosComponent', () => {
  let component: FormularioModulosComponent;
  let fixture: ComponentFixture<FormularioModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioModulosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
