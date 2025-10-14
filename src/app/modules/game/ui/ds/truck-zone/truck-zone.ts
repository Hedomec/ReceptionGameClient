import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TruckComponet } from '../truck/truck';
import { TruckSlot, TruckZone } from '../../../domain/model/truck-slot';
import { TruckSlotComponent } from '../truck-slot/truck-slot';
import { Truck } from '../../../domain/model/truck';
import { Box } from '../../../domain/model/box';

@Component({
  selector: 'app-truck-zone',
  imports: [TruckSlotComponent],
  templateUrl: './truck-zone.html',
  styleUrl: './truck-zone.scss',
})
export class TruckZoneComponent implements OnInit {
  @Output() boxClicked = new EventEmitter<Box>();

  truckSlots: TruckZone = {
    slot1: {
      idSlot: 1,
      truckOnSlot: this.generateTruck(),
    },
    slot2: {
      idSlot: 2,
      truckOnSlot: this.generateTruck(),
    },
    slot3: {
      idSlot: 3,
      truckOnSlot: this.generateTruck(),
    },
    slot4: {
      idSlot: 4,
      truckOnSlot: this.generateTruck(),
    },
  };

  constructor() {}

  ngOnInit() {
    this.UpdateCycle();
  }

  UpdateCycle() {
    setInterval(() => {
      this.updateTimeLeft();
      this.updateTrucks();
    }, 1000);
  }

  updateTrucks() {
    const truck = this.generateTruck();
    this.assignTruckToSlot(truck);
    this.removeInactiveTrucks();
  }

  generateTruck() {
    const newTruck: Truck = {
      timeLeft: Math.floor(Math.random() * (20 - 10 + 1)) + 10,
      isActive: true,
      isUnloaded: false,
      boxes: this.generateBoxes(),
    };

    return newTruck;
  }

  generateBoxes() {
    const numBoxes = Math.floor(Math.random() * (10 - 2 + 1)) + 2; // 2..10
    const boxes: Box[] = [];

    for (let i = 0; i < numBoxes; i++) {
      boxes.push({ productId: i + 1, categoryId: i + 2 }); // Todo: load real categories and products
    }
    return boxes;
  }

  removeInactiveTrucks() {
    Object.keys(this.truckSlots).forEach((key) => {
      const slot = this.truckSlots[key as keyof TruckZone];
      if (slot && slot.truckOnSlot && !slot.truckOnSlot.isActive) {
        slot.truckOnSlot = undefined;
      }
    });
  }

  assignTruckToSlot(truck: Truck) {
    const availableSlot = Object.keys(this.truckSlots).find((key) => {
      const slot = this.truckSlots[key as keyof TruckZone];
      return slot && !slot.truckOnSlot;
    });

    if (availableSlot) {
      const slot = this.truckSlots[availableSlot as keyof TruckZone];
      if (slot) {
        slot.truckOnSlot = truck;
      }
    }
  }

  updateTimeLeft() {
    Object.keys(this.truckSlots).forEach((key) => {
      const slot = this.truckSlots[key as keyof TruckZone];

      if (slot && slot.truckOnSlot) {
        if (slot.truckOnSlot.timeLeft > 0) {
          slot.truckOnSlot.timeLeft -= 1;
        } else {
          slot.truckOnSlot.isActive = false;
        }
      }
    });
  }

  onBoxClicked(event: any) {
    this.boxClicked.emit(event);
    console.log('onBoxClicked', event);
  }
}
