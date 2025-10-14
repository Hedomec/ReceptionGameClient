import { Injectable } from '@angular/core';
import { CategoriesGateway } from '../gateway/categories-gateway';
import { Observable } from 'rxjs';
import { ResponseApi } from '../../../../../services/apiService/api-service';
@Injectable({
  providedIn: 'root',
})
export class CategoriesUseCase {
  constructor(private _categoriesGateway: CategoriesGateway) {}

  getAllCategories(): Observable<ResponseApi> {
    return this._categoriesGateway.getAllCategories();
  }
}
