import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080/api/alunos'

  criarAluno(turmaId: any, aluno: Aluno):Observable<Aluno>{
    const createUrl = `${this.baseUrl}/${turmaId}/criar`;
    return this.http.post<Aluno>(createUrl, aluno);
  }

  listarAlunos():Observable<Aluno[]>{
    const listarTurmasUrl = `${this.baseUrl}/tudo`;
    return this.http.get<Aluno[]>(listarTurmasUrl);
  }
}
