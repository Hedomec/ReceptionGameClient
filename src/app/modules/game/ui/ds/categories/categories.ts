import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../../domain/model/category';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class CategoriesComponent {
  @Input() categories?: Category[];
  @Output() categorySelected = new EventEmitter<Category>();

  constructor() { }

  onCategoryClick(category: Category) {
    this.categorySelected.emit(category);
  }
}
