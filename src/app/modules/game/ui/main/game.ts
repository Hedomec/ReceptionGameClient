import { Component } from '@angular/core';
import { TruckZoneComponent } from '../ds/truck-zone/truck-zone';
import { Truck } from '../../domain/model/truck';
import { CategoriesComponent } from "../ds/categories/categories";
import { Category } from '../../domain/model/category';

@Component({
  selector: 'app-game',
  imports: [TruckZoneComponent, CategoriesComponent],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {
  incomingTrucks: Truck[] = [
    {
      timeLeft: 5,
      isActive: true,
      isUnloaded: false,
      boxes: [
        { productId: 1, categoryId: 1 },
        { productId: 2, categoryId: 2 },
      ],
    },
    {
      timeLeft: 10,
      isActive: true,
      isUnloaded: false,
      boxes: [{ productId: 1, categoryId: 1 }],
    },
    {
      timeLeft: 15,
      isActive: true,
      isUnloaded: false,
      boxes: [
        { productId: 1, categoryId: 1 },
        { productId: 2, categoryId: 2 },
      ],
    },
    {
      timeLeft: 20,
      isActive: true,
      isUnloaded: false,
      boxes: [{ productId: 1, categoryId: 1 }],
    },
    {
      timeLeft: 25,
      isActive: true,
      isUnloaded: false,
      boxes: [
        { productId: 1, categoryId: 1 },
        { productId: 2, categoryId: 2 },
      ],
    },
    {
      timeLeft: 20,
      isActive: true,
      isUnloaded: false,
      boxes: [
        { productId: 1, categoryId: 1 },
        { productId: 2, categoryId: 2 },
      ],
    },
    {
      timeLeft: 25,
      isActive: true,
      isUnloaded: false,
      boxes: [
        { productId: 1, categoryId: 1 },
        { productId: 2, categoryId: 2 },
      ],
    },
    {
      timeLeft: 20,
      isActive: true,
      isUnloaded: false,
      boxes: [
        { productId: 1, categoryId: 1 },
        { productId: 2, categoryId: 2 },
      ],
    },
    {
      timeLeft: 25,
      isActive: true,
      isUnloaded: false,
      boxes: [
        { productId: 1, categoryId: 1 },
        { productId: 2, categoryId: 2 },
      ],
    },
  ];

  categories: Category[] = [
    {
      categoryId: 1,
      categoryName: 'Electronics',
      categoryImage: 'assets/images/electronics.png',
    },
    {
      categoryId: 2,
      categoryName: 'Furniture',
      categoryImage: 'assets/images/furniture.png',
    },
    {
      categoryId: 3,
      categoryName: 'Clothing',
      categoryImage: 'assets/images/clothing.png',
    },
    {
      categoryId: 4,
      categoryName: 'Toys',
      categoryImage: 'assets/images/toys.png',
    }
  ]

  ngOnInit() { }
}
