import { Component, inject } from '@angular/core';
import { ScoreService } from '../../../../../services/scoreService/score-service';

@Component({
  selector: 'app-score',
  imports: [],
  templateUrl: './score.html',
  styleUrl: './score.scss',
})
export class Score {
  scoreService = inject(ScoreService);

  topScores: ScoreEntry[] = [];

  async ngOnInit(): Promise<void> {
    // Simulamos datos mockeados. Puedes remplazar esto por datos reales de una API
    await this.getScores();
  }

  getScores(): ScoreEntry[] {
    this.scoreService.getScores(10).then((score) => {
      if (score == null) {
        this.topScores = [];
        return;
      }
      this.topScores = score.data.models;
    });

    const scores = this.scoreService.getScores(10);

    return this.topScores;
  }
}

interface ScoreEntry {
  playerName: string;
  points: number;
}
