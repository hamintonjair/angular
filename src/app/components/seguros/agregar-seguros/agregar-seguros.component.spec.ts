import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSegurosComponent } from './agregar-seguros.component';

describe('AgregarSegurosComponent', () => {
  let component: AgregarSegurosComponent;
  let fixture: ComponentFixture<AgregarSegurosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarSegurosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
