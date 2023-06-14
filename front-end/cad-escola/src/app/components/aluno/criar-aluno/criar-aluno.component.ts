import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno.service';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { Turma } from 'src/app/models/turma';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-criar-aluno',
  templateUrl: './criar-aluno.component.html',
  styleUrls: ['./criar-aluno.component.css'],
})
export class CriarAlunoComponent implements OnInit {
  aluno: Aluno = {
    nome: '',
    matricula: '',
    turmaNome: '',
  };
  turmaId = 0;

  turmas: Turma[] = [];

  ngOnInit(): void {
    this.carregarTurmas();
  }

  constructor(
    private router: Router,
    private alunoService: AlunoService,
    private turmaService: TurmaService,
    private _snackBar: MatSnackBar
  ) {}

  create() {
    this.alunoService.criarAluno(this.turmaId, this.aluno).subscribe(
      (res) => {
        this.openSnackBar('Aluno cadastrado com sucesso!!');
        this.router.navigate(['']);
      },
      (err) => {
        this.openSnackBar('Erro ao cadastrar Aluno..');
      }
    );
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', { duration: 3000 });
  }

  carregarTurmas() {
    this.turmaService.listarTurmas().subscribe((res) => {
      res.forEach((turma) => {
        this.turmas.push(turma);
      });
    });
  }
}
