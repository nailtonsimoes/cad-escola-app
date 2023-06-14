import { Component } from '@angular/core';
import { Aluno } from 'src/app/models/aluno';

@Component({
  selector: 'app-listar-todos-alunos',
  templateUrl: './listar-todos-alunos.component.html',
  styleUrls: ['./listar-todos-alunos.component.css']
})
export class ListarTodosAlunosComponent {
  listaDeAlunos: Aluno[] = []; // Inicialize a fonte de dados com um array vazio ou com os dados desejados

  constructor() { }

  ngOnInit(): void {
    // Preencha a fonte de dados com os dados desejados
    this.listaDeAlunos = [
      { id: 1, nome: 'Chicus Chapelotis', matricula:'202306547', turma: '1' },
      { id: 2, nome: 'Maria Garibalda', matricula:'202105542', turma: '2' },
      { id: 3, nome: 'Dobervaldo Pereira', matricula:'202208101', turma: '2'}
    ];
  }

}
