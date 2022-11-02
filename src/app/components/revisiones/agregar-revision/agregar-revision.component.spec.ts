import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRevisionComponent } from './agregar-revision.component';

describe('AgregarRevisionComponent', () => {
  let component: AgregarRevisionComponent;
  let fixture: ComponentFixture<AgregarRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarRevisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
