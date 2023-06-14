import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarTurmaComponent } from './criar-turma.component';

describe('CriarTurmaComponent', () => {
  let component: CriarTurmaComponent;
  let fixture: ComponentFixture<CriarTurmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarTurmaComponent]
    });
    fixture = TestBed.createComponent(CriarTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
