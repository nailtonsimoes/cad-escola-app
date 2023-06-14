package com.webapp.cadescola.controllers;

import com.webapp.cadescola.domain.Aluno;
import com.webapp.cadescola.dtos.AlunoDto;
import com.webapp.cadescola.services.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/alunos")
public class AlunoController {

    @Autowired
    private AlunoService alunoService;

    @PostMapping("/{turmaId}/criar")
    @ResponseStatus(HttpStatus.CREATED)
    public Aluno criarAluno(@PathVariable Long turmaId, @RequestBody AlunoDto aluno) {
        return alunoService.salvarAluno(turmaId, aluno);
    }

    @GetMapping("/tudo")
    @ResponseStatus(HttpStatus.OK)
    public List<Aluno> listarAlunos() {
        return alunoService.listarAlunos();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Aluno> buscarAlunoPorId(@PathVariable Long id) {
        return alunoService.buscarAlunoPorId(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void updateAluno(@PathVariable Long id, @RequestBody Aluno aluno) {
        alunoService.atualizaraluno(id, aluno);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarTurma(@PathVariable Long id) {
        alunoService.deletarAluno(id);
    }

}
