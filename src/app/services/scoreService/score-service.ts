import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseApi } from '../apiService/api-service';
import { ToolsService } from '../toolsService/tools-service';
import { ScoreUsercase } from '../../modules/game/domain/Score/usecase/score-usercase';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  injector = inject(HttpClient);
  toolsService = inject(ToolsService);

  constructor(private _scoreUseCase: ScoreUsercase) {}

  getScores(quantity: number): Promise<ResponseApi | null> {
    const request = this._scoreUseCase.getScores(quantity);
    return this.toolsService.handleResponse(request, true);
  }

  submitScore(name: string, score: number): Promise<ResponseApi | null> {
    const body = { PlayerName: name, Points: score };
    const request = this._scoreUseCase.submitScore(name, score);
    return this.toolsService.handleResponse(request, false);
  }
}
