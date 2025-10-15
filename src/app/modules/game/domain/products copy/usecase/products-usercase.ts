import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApi } from '../../../../../services/apiService/api-service';
import { ScoreGateway } from '../../Score/gateway/score-gateway';
@Injectable({
  providedIn: 'root',
})
export class ProductsUsercase {
  constructor(private _scoreGateway: ScoreGateway) {}

  getRandomProducts(quantity: number): Observable<ResponseApi> {
    return this._scoreGateway.getScores(quantity);
  }
}
