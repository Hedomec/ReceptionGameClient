import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, ResponseApi } from '../../../../services/apiService/api-service';
import { ProductsGateway } from '../../domain/products/gateway/products-gateway';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiImpl extends ProductsGateway {
  constructor(private apiService: ApiService) {
    super();
  }

  getRandomProducts(quantity: number): Observable<ResponseApi> {
    return this.apiService.get<ResponseApi>('products/getProducts?quantity=' + quantity);
  }
}
