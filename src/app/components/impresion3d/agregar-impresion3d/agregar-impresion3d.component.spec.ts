import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarImpresion3dComponent } from './agregar-impresion3d.component';

describe('AgregarImpresion3dComponent', () => {
  let component: AgregarImpresion3dComponent;
  let fixture: ComponentFixture<AgregarImpresion3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarImpresion3dComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarImpresion3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
