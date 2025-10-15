import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CategoriesGateway } from './modules/game/domain/categories/gateway/categories-gateway';
import { CategoriesApiImpl } from './modules/game/infrastructure/driven-adapter/categories-api-impl';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ProductsGateway } from './modules/game/domain/products/gateway/products-gateway';
import { ProductsApiImpl } from './modules/game/infrastructure/driven-adapter/products-api-impl';
import { Score } from './modules/game/ui/ds/score/score';
import { ScoreGateway } from './modules/game/domain/Score/gateway/score-gateway';
import { ScoreApiImpl } from './modules/game/infrastructure/driven-adapter/score-api-Impl';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: CategoriesGateway, useClass: CategoriesApiImpl },
    { provide: ProductsGateway, useClass: ProductsApiImpl },
    { provide: ScoreGateway, useClass: ScoreApiImpl },
  ],
};
