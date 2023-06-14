package com.webapp.cadescola.services;

import com.webapp.cadescola.domain.Aluno;
import com.webapp.cadescola.domain.Turma;
import com.webapp.cadescola.dtos.AlunoRequestDto;
import com.webapp.cadescola.dtos.AlunoResponseDto;
import com.webapp.cadescola.repositories.AlunoRepository;
import com.webapp.cadescola.repositories.TurmaRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AlunoService {

    @Autowired
    AlunoRepository alunoRepository;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private TurmaRepository turmaRepository;

    public Aluno salvarAluno(Long turmaId, AlunoRequestDto requestDto) {
        Turma turmaLocal = turmaRepository.findById(turmaId).
                orElseThrow(
                        () -> new RuntimeException(
                                "Turma não encontradA!"
                        ));
        Aluno alunoModelo = new Aluno();

        alunoModelo.setNome(requestDto.getNome());
        alunoModelo.setMatricula(requestDto.getMatricula());
        alunoModelo.setTurma(turmaLocal);

        return alunoRepository.save(alunoModelo);
    }

    public List<AlunoResponseDto> listarAlunos() {
        List<Aluno> alunosDb = alunoRepository.findAll();
        return alunosDb.stream()
                .map(aluno -> mapper.map(aluno, AlunoResponseDto.class))
                .collect(Collectors.toList());
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
