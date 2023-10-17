import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2',
    },
    {
      conteudo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue finibus libero gravida finibus. Praesent vel nisi nulla. Praesent gravida efficitur tellus, vel dignissim libero. Aenean maximus aliquam mi nec sodales. Mauris ultricies ac odio nec.',
      autoria: '',
      modelo: 'modelo1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
