import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTodosAlunosComponent } from './listar-todos-alunos.component';

describe('ListarTodosAlunosComponent', () => {
  let component: ListarTodosAlunosComponent;
  let fixture: ComponentFixture<ListarTodosAlunosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarTodosAlunosComponent]
    });
    fixture = TestBed.createComponent(ListarTodosAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
