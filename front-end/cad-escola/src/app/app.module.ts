import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CriarAlunoComponent } from './components/aluno/criar-aluno/criar-aluno.component';
import { ListarTodosAlunosComponent } from './components/aluno/listar-todos-alunos/listar-todos-alunos.component';
import { CriarTurmaComponent } from './components/turma/criar-turma/criar-turma.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CriarAlunoComponent,
    ListarTodosAlunosComponent,
    CriarTurmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
