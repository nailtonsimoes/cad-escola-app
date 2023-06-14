import { Aluno } from "./aluno";

export interface Turma {
  id?: number,
  codigo?: string,
  nome: string,
  alunos?: Aluno[]
}
