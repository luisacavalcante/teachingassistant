import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Luisa';
   aluno: Aluno = new Aluno( "",  "",  "","");
}

export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  login:string;

  constructor(nome:string, cpf:string,email:string, login:string){
    this.nome=nome;
    this.cpf=cpf;
    this.email=email;
    this.login=login;
  }
}
