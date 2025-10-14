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

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: CategoriesGateway, useClass: CategoriesApiImpl }, // crea nueva instancia
  ],
};
