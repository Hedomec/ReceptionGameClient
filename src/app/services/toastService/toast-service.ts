import { Injectable, signal, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly _toasts = signal<Toast[]>([]);
  readonly toasts = this._toasts.asReadonly();

  show(toast: Toast) {
    this._toasts.update((toasts) => [...toasts, toast]);
  }

  remove(toast: Toast) {
    this._toasts.update((toasts) => toasts.filter((t) => t !== toast));
  }

  clear() {
    this._toasts.set([]);
  }

  success(text: string, delay?: number) {
    this.show({ text, classname: 'bg-success text-light', delay });
  }

  danger(text: string, delay?: number) {
    this.show({ text, classname: 'bg-danger text-light', delay });
  }
}

export interface Toast {
  text: string;
  classname?: string;
  delay?: number;
}
