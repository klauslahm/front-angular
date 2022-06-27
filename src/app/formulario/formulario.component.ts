import { LatitudeLongitude } from './../models/LatitudeLongitude.model';
import { ConsultarLatitudeLongitudeService } from './../consultar-latitude-longitude.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Previsao } from '../models/Previsao.model';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  private service: ConsultarLatitudeLongitudeService;

  @Output() obterPrevisoes = new EventEmitter<Previsao>();

  constructor(service: ConsultarLatitudeLongitudeService) {
    this.service = service;
  }

  consultarPrevisoes(cidade: string) {
    console.log(cidade);
    this.service
      .ConsultarLatitudeLongitudeService(cidade)
      .subscribe((latitudeLongitude: LatitudeLongitude) => {
        console.log(latitudeLongitude.name);
        this.service
          .consultarPrevisao(latitudeLongitude)
          .subscribe((previsao: Previsao) => {
            console.log(previsao.current.dt);
            this.obterPrevisoes.emit(previsao);
          });
      });
  }

  ngOnInit(): void {}
}
