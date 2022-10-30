import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEstudiosRolComponent } from './formulario-estudios-rol.component';

describe('FormularioEstudiosRolComponent', () => {
  let component: FormularioEstudiosRolComponent;
  let fixture: ComponentFixture<FormularioEstudiosRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEstudiosRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEstudiosRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
