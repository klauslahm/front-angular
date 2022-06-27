import { Previsao } from './../models/Previsao.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-previsoes',
  templateUrl: './previsoes.component.html',
  styleUrls: ['./previsoes.component.scss'],
})
export class PrevisoesComponent implements OnInit {
  @Input()
  previsao!: Previsao;

  constructor() {}

  ngOnInit(): void {}

  getDiaSemana(posicao: number) {
    return new Date(this.previsao.daily[posicao].dt * 1000).toLocaleString('pt-BR', {weekday: 'long'}).toUpperCase();
  }

}
