import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabvarGeneralComponent } from './nabvar-general.component';

describe('NabvarGeneralComponent', () => {
  let component: NabvarGeneralComponent;
  let fixture: ComponentFixture<NabvarGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabvarGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NabvarGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
