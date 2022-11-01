import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionesFinalizadasComponent } from './revisiones-finalizadas.component';

describe('RevisionesFinalizadasComponent', () => {
  let component: RevisionesFinalizadasComponent;
  let fixture: ComponentFixture<RevisionesFinalizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionesFinalizadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisionesFinalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
