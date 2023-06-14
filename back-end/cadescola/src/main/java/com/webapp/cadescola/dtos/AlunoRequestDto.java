package com.webapp.cadescola.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AlunoRequestDto {

    private String matricula;

    private String nome;

}
