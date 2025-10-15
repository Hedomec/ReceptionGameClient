import { Component, inject } from '@angular/core';
import { TruckZoneComponent } from '../ds/truck-zone/truck-zone';
import { CategoriesComponent } from '../ds/categories/categories';
import { Category } from '../../domain/model/category';
import { Product } from '../../domain/model/product';
import { Box } from '../../domain/model/box';
import { CategoriesService } from '../../../../services/categoriesService/categories-service';
import { ProductsService } from '../../../../services/productsService/products-service';
import { Score } from '../ds/score/score';
import { Gameover } from '../ds/gameover/gameover';

@Component({
  selector: 'app-game',
  imports: [TruckZoneComponent, CategoriesComponent, Score, Gameover],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {
  _categoriesService = inject(CategoriesService);
  _productsService = inject(ProductsService);

  boxesSelected: Box[] = [];
  correctBoxes: Box[] = [];
  category?: Category;

  categories: Category[] = [];
  products: Product[] = [];

  scorepoints: number = 0;
  gameTimeLeft: number = 200;

  actualTruckGone: number = 0;

  multiplier: number = 0;

  statusGame: 'score' | 'playing' | 'gameover' = 'score';

  async startGame() {
    this.statusGame = 'playing';
    this.scorepoints = 0;
    this.actualTruckGone = 0;
    this.gameTimeLeft = 200;

    await this.loadCategories();
    await this.loadProducts();
  }

  boxSelected(event: any) {
    this.boxesSelected = event;
    console.log(this.boxesSelected);
  }

  catSelect(event: any) {
    this.category = event;
    console.log(this.category);

    if (this.boxesSelected?.length <= 0) {
      console.log('Select a box first');
      return;
    }

    const hasMismatch = this.boxesSelected.some(
      (box) => box.categoryId !== this.category?.categoryId
    );

    if (hasMismatch) {
      console.log('❌ Alguna caja no coincide con la categoría seleccionada');
      this.correctBoxes = [];
      this.boxesSelected = [];
      this.gameTimeLeft -= 10;
    } else {
      console.log('✅ Todas las cajas coinciden con la categoría');
      this.correctBoxes = this.boxesSelected;

      this.multiplier = this.boxesSelected.length;

      this.scorepoints += 10 * this.multiplier;
      this.gameTimeLeft += 5 * this.multiplier;
      this.boxesSelected = [];
      this.multiplier = 0;
      console.log('Puntuación actual:', this.scorepoints);
    }
  }

  loadCategories() {
    this._categoriesService.getAllCategories().then((categories) => {
      if (categories == null) {
        this.categories = [];
        return;
      }
      this.categories = categories.data.models;
    });
  }

  loadProducts() {
    this._productsService.getRandomProducts(20).then((products) => {
      if (products == null) {
        this.products = [];
        return;
      }

      this.products = products.data.models;
    });
  }

  onUpdateTruckGone(event: any) {
    this.actualTruckGone = event;

    if (this.actualTruckGone >= 3) {
      console.log('Game Over: Has perdido 3 camiones');
      this.statusGame = 'gameover';
    }

    console.log('Camiones perdidos actualizados en Game:', this.actualTruckGone);
  }

  restartGame() {
    window.location.reload();
  }

  onGameTimeLeftChange(event: any) {
    this.gameTimeLeft = event;

    if (this.gameTimeLeft <= 0) {
      console.log('Game Over: Se acabó el tiempo');
      this.statusGame = 'gameover';
    }
  }
}
