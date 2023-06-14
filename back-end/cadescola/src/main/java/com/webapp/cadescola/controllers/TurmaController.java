package com.webapp.cadescola.controllers;

import com.webapp.cadescola.domain.Turma;
import com.webapp.cadescola.dtos.TurmaDto;
import com.webapp.cadescola.services.TurmaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/turmas")
public class TurmaController {

    @Autowired
    private TurmaService turmaService;

    @PostMapping("/criar")
    @ResponseStatus(HttpStatus.CREATED)
    public Turma criarTurma(@RequestBody Turma turma) {
        return turmaService.salvarTurma(turma);
    }

    @GetMapping("/tudo")
    @ResponseStatus(HttpStatus.OK)
    public List<Turma> listarTurmas() {
        return turmaService.listarTurmas();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Turma> buscarTurmaPorId(@PathVariable Long id) {
        return turmaService.buscarTurmaPorId(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void updateTurma(@PathVariable Long id, @RequestBody Turma turma){
        turmaService.atualizarTurma(id,turma);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarTurma(@PathVariable Long id){
        turmaService.deletarTurma(id);
    }
}
