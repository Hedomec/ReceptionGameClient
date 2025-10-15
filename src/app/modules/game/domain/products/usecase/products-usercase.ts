import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApi } from '../../../../../services/apiService/api-service';
import { ProductsGateway } from '../gateway/products-gateway';
@Injectable({
  providedIn: 'root',
})
export class ProductsUsercase {
  constructor(private _productsGateway: ProductsGateway) { }

  getRandomProducts(quantity: number): Observable<ResponseApi> {
    return this._productsGateway.getRandomProducts(quantity);
  }
}
