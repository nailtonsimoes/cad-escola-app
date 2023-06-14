package com.webapp.cadescola.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AlunoResponseDto {
    private String matricula;

    private String nome;

    private String turmaNome;
}
