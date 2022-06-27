import { LatitudeLongitude } from './models/LatitudeLongitude.model';
import { Previsao } from './models/Previsao.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ConsultarLatitudeLongitudeService {
  readonly urlLatitudeLongitude =
    'https://api.openweathermap.org/data/2.5/weather?lang=pt_br&units=metric&appid=01becf4c0123cc88ae002f7e66ec647e&q=';

  readonly urlPrevisao =
    'https://api.openweathermap.org/data/2.5/onecall?lang=pt_br&units=metric&appid=01becf4c0123cc88ae002f7e66ec647e&exclude=hourly,minutely,alerts';

  constructor(private HttpClient: HttpClient) {}

  ConsultarLatitudeLongitudeService(cidade: string) {
    return this.HttpClient.get<LatitudeLongitude>(
      this.urlLatitudeLongitude.concat(cidade)
    );
  }

  consultarPrevisao(latitudeLongitude: LatitudeLongitude) {
    return this.HttpClient.get<Previsao>(
      this.urlPrevisao.concat(
        '&lat=' +
          latitudeLongitude.coord.lat +
          '&lon=' +
          latitudeLongitude.coord.lon
      )
    );
  }
}
