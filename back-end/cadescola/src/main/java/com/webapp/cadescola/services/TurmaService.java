package com.webapp.cadescola.services;

import com.webapp.cadescola.domain.Turma;
import com.webapp.cadescola.repositories.TurmaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TurmaService {

    @Autowired
    private TurmaRepository turmaRepository;

    public Turma salvarTurma(Turma turma) {
        return turmaRepository.save(turma);
    }

    public List<Turma> listarTurmas() {
        return turmaRepository.findAll();
    }


    public Optional<Turma> buscarTurmaPorId(Long id) {
        return turmaRepository.findById(id);
    }

    public void atualizarTurma(Long id, Turma turma) {
        var turmaLocal = turmaRepository.findById(id).
                orElseThrow(
                        () -> new RuntimeException(
                                "Turma não encontrada!"
                        ));

        turmaLocal.setNome(turma.getNome());
        turmaLocal.setCodigo(turma.getCodigo());

        turmaRepository.save(turmaLocal);
    }

    public void deletarTurma(Long id) {
        turmaRepository.deleteById(id);
    }
}
