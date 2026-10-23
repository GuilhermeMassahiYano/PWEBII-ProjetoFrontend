import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  standalone: false,
  templateUrl: './listar-produtos.html',
  styleUrl: './listar-produtos.css'
})
export class ListarProdutos {
  listarProdutos: any[] = [
    {
      id: 1,
      nome: 'Orca Assassina',
      validade: '2019-09-24',
      precoProduto: 150000
    },
    {
      id: 2,
      nome: 'Baleia Jubarte',
      validade: '2013-11-12',
      precoProduto: 1500000
    },
    {
      id: 3,
      nome: 'Narval',
      validade: '2017-05-09',
      precoProduto: 3000000
    }
  ];
}