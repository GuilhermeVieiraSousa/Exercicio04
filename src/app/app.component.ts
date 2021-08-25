import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercicio4';
  textoBotao = "Esconder";  
  esconder = false;  
  
  cursos = 
  [    
    { nome: "TypeScript", duracao: "12h" },    
    { nome: "Java basico", duracao: "22h" }  
  ];
  
  
  alterarExibicao() {    
    this.textoBotao = this.esconder ?  "Esconder" : "Exibir" ;    
    this.esconder = !this.esconder;}

    adicionar(nome, duracao) 
    {    this.cursos = [{ nome: nome, duracao: duracao }, ...this.cursos];}
}
