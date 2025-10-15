import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScoreService } from '../../../../../services/scoreService/score-service';

@Component({
  selector: 'app-gameover',
  imports: [FormsModule],
  templateUrl: './gameover.html',
  styleUrl: './gameover.scss',
})
export class Gameover {
  scoreService = inject(ScoreService);

  isSubmitting: boolean = false;

  submitScore() {
    if (this.isSubmitting || !this.playerName) return;

    this.isSubmitting = true;

    this.scoreService.submitScore(this.playerName, this.scorepoints).then(() => {
      this.isSubmitting = false;
      window.location.reload();
    });
  }

  playerName: string = '';
  @Input() scorepoints: number = 0;
}
