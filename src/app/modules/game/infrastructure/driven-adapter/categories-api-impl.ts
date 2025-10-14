import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, ResponseApi } from '../../../../services/apiService/api-service';
import { CategoriesGateway } from '../../domain/categories/gateway/categories-gateway';

@Injectable({
  providedIn: 'root',
})
export class CategoriesApiImpl extends CategoriesGateway {
  constructor(private apiService: ApiService) {
    super();
  }

  getAllCategories(): Observable<ResponseApi> {
    return this.apiService.get<ResponseApi>('Categories');
  }
}
