import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseApi } from '../apiService/api-service';
import { lastValueFrom } from 'rxjs';
import { ProductsUsercase } from '../../modules/game/domain/products/usecase/products-usercase';
import { ToolsService } from '../toolsService/tools-service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  injector = inject(HttpClient);
  toolsService = inject(ToolsService);

  constructor(private _productsUseCase: ProductsUsercase) {}

  getRandomProducts(quantity: number): Promise<ResponseApi | null> {
    const request = this._productsUseCase.getRandomProducts(quantity);
    return this.toolsService.handleResponse(request, true);
  }
}
