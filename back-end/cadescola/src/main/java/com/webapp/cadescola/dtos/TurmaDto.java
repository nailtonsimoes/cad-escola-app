package com.webapp.cadescola.dtos;

import com.webapp.cadescola.domain.Aluno;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TurmaDto {
    private Long id;
    private String Codigo;
    private String nome;
    private List<Aluno> alunos = new ArrayList<>();
}
