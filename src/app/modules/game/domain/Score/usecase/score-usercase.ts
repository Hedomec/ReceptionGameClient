import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApi } from '../../../../../services/apiService/api-service';
import { ScoreGateway } from '../gateway/score-gateway';
@Injectable({
  providedIn: 'root',
})
export class ScoreUsercase {
  constructor(private _scoreGateway: ScoreGateway) {}

  getScores(quantity: number): Observable<ResponseApi> {
    return this._scoreGateway.getScores(quantity);
  }

  submitScore(name: string, score: number): Observable<ResponseApi> {
    return this._scoreGateway.submitScore(name, score);
  }
}
