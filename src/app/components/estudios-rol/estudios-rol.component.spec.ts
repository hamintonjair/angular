import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosRolComponent } from './estudios-rol.component';

describe('EstudiosRolComponent', () => {
  let component: EstudiosRolComponent;
  let fixture: ComponentFixture<EstudiosRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiosRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiosRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
