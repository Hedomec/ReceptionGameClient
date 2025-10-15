import { Observable } from 'rxjs';
import { ResponseApi } from '../../../../../services/apiService/api-service';

export abstract class ScoreGateway {
  abstract getScores(quantity: number): Observable<ResponseApi>;
  abstract submitScore(name: string, score: number): Observable<ResponseApi>;
}
