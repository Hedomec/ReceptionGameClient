import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CategoriesUseCase } from '../../modules/game/domain/categories/usecase/categories-usercase';
import { ResponseApi } from '../apiService/api-service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  injector = inject(HttpClient);

  constructor(private _categoriesUseCase: CategoriesUseCase) {}

  getAllCategories(): Promise<ResponseApi> {
    const request = this._categoriesUseCase.getAllCategories();
    return lastValueFrom(request);
  }
}
