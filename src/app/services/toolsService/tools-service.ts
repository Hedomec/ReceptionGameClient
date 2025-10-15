import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { ResponseApi } from '../apiService/api-service';
import { ToastService } from '../toastService/toast-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class ToolsService {
  constructor(private modalService: NgbModal, private toastService: ToastService) {}

  async openModalComponent(
    component: any,
    title: string,
    subtitle: string,
    size: string | undefined = undefined,
    btnConfirm = 'Accept',
    btnCancel = 'Cancel',
    data: any = null,
    backdrop: boolean | 'static' | undefined = true,
    centered = false,
    subtitle2: string | null = null
  ) {
    const modal = this.modalService.open(component, {
      size,
      backdrop,
      centered,
    });

    modal.componentInstance.title = title;
    modal.componentInstance.subtitle = subtitle;
    modal.componentInstance.btnConfirm = btnConfirm;
    modal.componentInstance.btnCancel = btnCancel;
    modal.componentInstance.data = data;
    modal.componentInstance.subtitle2 = subtitle2;

    try {
      const result = await modal.result;
      return typeof result === 'object'
        ? result
        : result === 'ok'
        ? true
        : result === 'cancel'
        ? false
        : null;
    } catch (error) {
      return null;
    }
  }

  public async handleResponse(
    data: Observable<ResponseApi>,
    showMessage: boolean = true
  ): Promise<ResponseApi | null> {
    try {
      const res = await lastValueFrom(data);

      if (res.success == false && showMessage) {
        throw new HttpErrorResponse({ error: res, status: 400, statusText: 'Bad Request' });
      }

      return res;
    } catch (error) {
      if (error instanceof HttpErrorResponse && error.status !== 0) {
        const msg = error?.error?.data?.error ?? 'An unknown error occurred';
        if (showMessage) {
          this.toastService.danger(msg);
        }
        return error.error as ResponseApi;
      }

      const msg = 'An unknown error occurred';
      if (showMessage) {
        this.toastService.danger(msg);
      }
      return { error: true, message: msg, data: null } as ResponseApi;
    }
  }
}
