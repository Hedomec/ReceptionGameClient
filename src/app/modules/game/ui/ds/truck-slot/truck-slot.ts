import { Component, Input } from '@angular/core';
import { TruckComponet } from '../truck/truck';
import { TruckSlot } from '../../../domain/model/truck-slot';
import { BoxComponent } from '../box/box';

@Component({
  selector: 'app-truck-slot',
  imports: [TruckComponet, BoxComponent],
  templateUrl: './truck-slot.html',
  styleUrl: './truck-slot.scss',
})
export class TruckSlotComponent {
  @Input() slot?: TruckSlot;

  constructor() {}
}
