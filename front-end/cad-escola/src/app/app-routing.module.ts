import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTodosAlunosComponent } from './components/aluno/listar-todos-alunos/listar-todos-alunos.component';
import { CriarAlunoComponent } from './components/aluno/criar-aluno/criar-aluno.component';
import { CriarTurmaComponent } from './components/turma/criar-turma/criar-turma.component';

const routes: Routes = [
  {
    path: '',
    component: ListarTodosAlunosComponent
  },
  {
    path: 'aluno/criar',
    component: CriarAlunoComponent
  },
  {
    path: 'turma/criar',
    component: CriarTurmaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
