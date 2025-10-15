import { Observable } from 'rxjs';
import { ResponseApi } from '../../../../../services/apiService/api-service';

export abstract class ProductsGateway {
  abstract getRandomProducts(quantity: number): Observable<ResponseApi>;
}
