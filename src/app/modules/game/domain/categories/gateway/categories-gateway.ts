import { Observable } from 'rxjs';
import { ResponseApi } from '../../../../../services/apiService/api-service';

export abstract class CategoriesGateway {
  abstract getAllCategories(): Observable<ResponseApi>;
}
