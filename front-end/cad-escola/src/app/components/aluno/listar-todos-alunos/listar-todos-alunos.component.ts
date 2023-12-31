import { Component } from '@angular/core';
import { Aluno } from 'src/app/models/aluno';
import { Turma } from 'src/app/models/turma';
import { AlunoService } from 'src/app/services/aluno.service';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-listar-todos-alunos',
  templateUrl: './listar-todos-alunos.component.html',
  styleUrls: ['./listar-todos-alunos.component.css'],
})
export class ListarTodosAlunosComponent {
  listaDeAlunos: Aluno[] = []; 
  turmas: Turma[] = [];

  constructor(private turmaService: TurmaService, private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.carregarTurmas();
    this.carregarAlunos();
  }

  carregarAlunos() {
    this.alunoService.listarAlunos().subscribe((res) => {
      console.log(res);
      res.forEach((aluno) => {
        this.listaDeAlunos.push(aluno);
      });
    });
  }

  carregarTurmas() {
    this.turmaService.listarTurmas().subscribe((res) => {
      res.forEach((turma) => {
        this.turmas.push(turma);
      });
    });
  }

  obterNomeTurma(idTurma: number): string {
    const turmaEncontrada = this.turmas.find((turma) => turma.id === idTurma);
    return turmaEncontrada ? turmaEncontrada.nome : '';
  }

}
