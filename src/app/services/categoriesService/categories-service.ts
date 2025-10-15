import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CategoriesUseCase } from '../../modules/game/domain/categories/usecase/categories-usercase';
import { ResponseApi } from '../apiService/api-service';
import { lastValueFrom } from 'rxjs';
import { ToolsService } from '../toolsService/tools-service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  injector = inject(HttpClient);
  toolsService = inject(ToolsService);

  constructor(private _categoriesUseCase: CategoriesUseCase) {}

  getAllCategories(): Promise<ResponseApi | null> {
    const request = this._categoriesUseCase.getAllCategories();
    return this.toolsService.handleResponse(request, true);
  }
}
