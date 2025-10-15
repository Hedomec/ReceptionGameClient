import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseApi } from '../apiService/api-service';
import { lastValueFrom } from 'rxjs';
import { ProductsUsercase } from '../../modules/game/domain/products/usecase/products-usercase';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  injector = inject(HttpClient);

  constructor(private _productsUseCase: ProductsUsercase) { }

  getRandomProducts(quantity: number): Promise<ResponseApi> {
    const request = this._productsUseCase.getRandomProducts(quantity);
    return lastValueFrom(request);
  }
}
