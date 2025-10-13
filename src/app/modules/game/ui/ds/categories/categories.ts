import { Component, Input } from '@angular/core';
import { Category } from '../../../domain/model/category';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class CategoriesComponent {
  @Input() categories?: Category[];
}
