import { Component } from '@angular/core';
import { TruckZoneComponent } from '../ds/truck-zone/truck-zone';
import { CategoriesZone } from '../ds/categories-zone/categories-zone';
import { Truck } from '../../domain/model/truck';

@Component({
  selector: 'app-game',
  imports: [TruckZoneComponent, CategoriesZone],
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

  ngOnInit() {}
}
