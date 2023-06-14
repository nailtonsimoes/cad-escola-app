package com.webapp.cadescola.services;

import com.webapp.cadescola.domain.Aluno;
import com.webapp.cadescola.domain.Turma;
import com.webapp.cadescola.repositories.AlunoRepository;
import com.webapp.cadescola.repositories.TurmaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlunoService {

    @Autowired
    AlunoRepository alunoRepository;

    @Autowired
    private TurmaRepository turmaRepository;

    public Aluno salvarAluno(Long turmaId, Aluno aluno) {
        Turma turmaLocal = turmaRepository.findById(turmaId).
                orElseThrow(
                        () -> new RuntimeException(
                                "Turma não encontradA!"
                        ));
        aluno.setTurma(turmaLocal);
        return alunoRepository.save(aluno);
    }

    public List<Aluno> listarAlunos() {
        return alunoRepository.findAll();
    }

    public Optional<Aluno> buscarAlunoPorId(Long id) {
        return alunoRepository.findById(id);
    }

    public void atualizaraluno(Long id, Aluno aluno) {
        var alunoLocal = alunoRepository.findById(id).
                orElseThrow(
                        () -> new RuntimeException(
                                "Aluno não encontrado!"
                        ));

        alunoLocal.setNome(aluno.getNome());
        alunoLocal.setMatricula(aluno.getMatricula());

        alunoRepository.save(alunoLocal);
    }

    public void deletarAluno(Long id) {
        alunoRepository.deleteById(id);
    }
}
