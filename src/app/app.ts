import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toast, ToastService } from './services/toastService/toast-service';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgbToast],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('reception-game-client');

  toastService = inject(ToastService);

  removeToast(toast: Toast) {
    this.toastService.remove(toast);
  }
}
