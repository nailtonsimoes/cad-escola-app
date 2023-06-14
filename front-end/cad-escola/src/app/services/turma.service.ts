import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turma } from '../models/turma';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080/api/turmas'

  criarTurma(turma: Turma):Observable<Turma>{
    const createUrl = `${this.baseUrl}/criar`;
    return this.http.post<Turma>(createUrl, turma);
  }

  listarTurmas():Observable<Turma[]>{
    const listarTurmasUrl = `${this.baseUrl}/tudo`;
    return this.http.get<Turma[]>(listarTurmasUrl);
  }

}
