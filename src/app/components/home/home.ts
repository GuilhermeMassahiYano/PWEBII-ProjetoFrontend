import { ConditionalExpr } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

 nomeProduto: string = " Baleias";
  nomeProduto1: string = " Orca assasina";
   nomeProduto2: string = "Baleia jubarte";
   nomeProduto3: string = "Narval"
 //anuncio: string = "O" + this.nomeProduto + "está em promoção";
 anuncio: string = `As ${this.nomeProduto} estão em promoção `
 idProduto: number = 1;
 idProduto1: number = 2;
 idProduto2: number = 3;
 precoProduto: number = 150000.;
  precoProduto1: number = 1500000.;
  precoProduto2: number = 3000000.;
 promocao: boolean = true;
 foto: string = "img/image.png";
 foto1: string = "img/baleiajubarte.png"
 foto2: string = "img/narval.png"
 dataNascimento = '2019-09-24'
  dataNascimento2 = '2013-11-12'
  dataNascimento3 = '2017-05-09'


 testeVariaveis(): void{
  console.log("Nome do Produto; ", this.nomeProduto);
  console.log("Anuncio: ", this.anuncio);
  console.log("ID:", this.idProduto);
  console.log("Preço: ", this.precoProduto);
  console.log("Promoção:", this.promocao);

  //escopo de variaveis dentro do codigo

  //var variavel1;
  //let variavel2;
 // const constante3 = 3;
  
  //var idade = 10;
 // function imprimeIdade(){
 //   var idade = 50;
  //  console.log("Minha idade é: ", idade);
 // }
 // imprimeIdade2();

  // function imprimeIdade2(){
  //  for(let idade = 30; idade <= 40; idade++){
   //   console.log("Idade dentro do for: ", idade);
 //   }
  //  console.log("Idade fora do for: ", idade);
//  }
 // imprimeIdade2();

  //var variavel = 0;
 // var variavel = 10;
 // console.log(`variavel`, variavel);
 // function funcao(){
  //  var outra_variavel = 20;
  //    var outra_variavel = 30;
   //   console.log(`outra variável`, outra_variavel);

    //  var a = 10;
   //   let b = 20;
   //   function bar(){
   //    var a = 30;
    //    let b = 40;
     //   if(true){
       //   var a = 50;
      //    let b = 60;
     //     console.log(`variável a dentro do if`, a);
     //       console.log(`variável b dentro do if`, b);
       // }
       //   console.log(`variável a dentro da funcao`, a);
       //     console.log(`variável b dentro da funcao`, b);
     // }
    //  bar();
      //  console.log(`variável a fora da funcao`, a);
      //    console.log(`variável b fora da funcao`, a);



  }
 }

