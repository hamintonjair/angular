import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarImpresoraComponent } from './agregar-impresora.component';

describe('AgregarImpresoraComponent', () => {
  let component: AgregarImpresoraComponent;
  let fixture: ComponentFixture<AgregarImpresoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarImpresoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarImpresoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
