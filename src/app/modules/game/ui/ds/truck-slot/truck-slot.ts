import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TruckComponet } from '../truck/truck';
import { TruckSlot } from '../../../domain/model/truck-slot';
import { BoxComponent } from '../box/box';
import { SlicePipe } from '@angular/common';
import { Box } from '../../../domain/model/box';

@Component({
  selector: 'app-truck-slot',
  imports: [TruckComponet, BoxComponent, SlicePipe],
  templateUrl: './truck-slot.html',
  styleUrl: './truck-slot.scss',
})
export class TruckSlotComponent {
  @Input() slot?: TruckSlot;
  @Output() boxClicked = new EventEmitter<Box>();

  constructor() {}

  onBoxClick(item: Box) {
    item.slotId = this.slot?.idSlot;
    this.boxClicked.emit(item);

    /*this.slot?.truckOnSlot?.boxes?.splice(this.slot.truckOnSlot.boxes.indexOf(item), 1);
    if (this.slot?.truckOnSlot?.boxes?.length === 0) {
      this.slot.truckOnSlot.isActive = false;
    }*/
    //console.log('Box removed', item);
  }
}
