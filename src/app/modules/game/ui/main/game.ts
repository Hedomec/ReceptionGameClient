import { Component, inject } from '@angular/core';
import { TruckZoneComponent } from '../ds/truck-zone/truck-zone';
import { CategoriesComponent } from '../ds/categories/categories';
import { Category } from '../../domain/model/category';
import { Product } from '../../domain/model/product';
import { Box } from '../../domain/model/box';
import { CategoriesService } from '../../../../services/categoriesService/categories-service';
import { ProductsService } from '../../../../services/productsService/products-service';

@Component({
  selector: 'app-game',
  imports: [TruckZoneComponent, CategoriesComponent],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {
  _categoriesService = inject(CategoriesService);
  _productsService = inject(ProductsService);

  box?: Box;
  category?: Category;

  categories: Category[] = [];
  products: Product[] = [];

  async ngOnInit() {
    await this.loadCategories();
  }

  boxSelected(event: any) {
    this.box = event;
    console.log(this.box);
  }

  catSelect(event: any) {
    this.category = event;
    console.log(this.category);

    if (!this.box) {
      console.log('Select a box first');
      return;
    }

    if (this.category && this.category.categoryId === this.box?.categoryId) {
      console.log('Correct match!');
      this.box = undefined;
      this.category = undefined;
    }
  }

  loadCategories() {
    this._categoriesService.getAllCategories().then((categories) => {
      this.categories = categories.data.models;
    });
  }

  loadProducts() {
    this._productsService.getRandomProducts(20).then((products) => {
      this.products
    })
  }
}
