import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaTareasComponent } from './ayuda-tareas.component';

describe('AyudaTareasComponent', () => {
  let component: AyudaTareasComponent;
  let fixture: ComponentFixture<AyudaTareasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AyudaTareasComponent]
    });
    fixture = TestBed.createComponent(AyudaTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
