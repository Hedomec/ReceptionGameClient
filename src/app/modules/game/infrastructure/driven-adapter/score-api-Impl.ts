import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, ResponseApi } from '../../../../services/apiService/api-service';
import { ProductsGateway } from '../../domain/products/gateway/products-gateway';
import { ScoreGateway } from '../../domain/Score/gateway/score-gateway';

@Injectable({
  providedIn: 'root',
})
export class ScoreApiImpl extends ScoreGateway {
  constructor(private apiService: ApiService) {
    super();
  }

  getScores(quantity: number): Observable<ResponseApi> {
    return this.apiService.get<ResponseApi>('score/getScores?quantity=' + quantity);
  }

  submitScore(name: string, score: number): Observable<ResponseApi> {
    const body = { PlayerName: name, Points: score };
    return this.apiService.post<ResponseApi>('score', body);
  }
}
