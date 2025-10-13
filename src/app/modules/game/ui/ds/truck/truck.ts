import { Component, Input } from '@angular/core';
import { Truck } from '../../../domain/model/truck';

@Component({
  selector: 'app-truck',
  imports: [],
  templateUrl: './truck.html',
  styleUrl: './truck.scss',
})
export class TruckComponet {
  @Input() truck?: Truck;

  constructor() {}
}
