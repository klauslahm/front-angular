import { Component } from '@angular/core';
import { Previsao } from './models/Previsao.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'projeto-angular';

  previsao!: Previsao;

  constructor() {}

  obterPrevisoes($event: Previsao) {
    console.log($event);
    this.previsao = $event;
  }
}
