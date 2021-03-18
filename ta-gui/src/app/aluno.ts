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
