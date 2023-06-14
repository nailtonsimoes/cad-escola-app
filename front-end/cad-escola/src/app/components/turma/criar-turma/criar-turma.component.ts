import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Turma } from 'src/app/models/turma';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-criar-turma',
  templateUrl: './criar-turma.component.html',
  styleUrls: ['./criar-turma.component.css']
})
export class CriarTurmaComponent implements OnInit {

  turma: Turma = {
    nome:'',
    codigo: ''
  }

  ngOnInit(): void {
   
  }

  constructor(private router: Router, private service: TurmaService, private _snackBar: MatSnackBar) { }

  create(){
    this.service.criarTurma(this.turma).subscribe(
      (res)=>{
        this.openSnackBar('Turma cadastrada com sucesso!!');
        this.router.navigate(['']);
      },
      err =>{
        this.openSnackBar('Erro ao cadastrar Turma..');
      }
    );
    
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "", {duration: 3000});
  }

}
