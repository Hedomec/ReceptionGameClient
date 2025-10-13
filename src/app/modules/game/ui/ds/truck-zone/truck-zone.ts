import { Component, Input, OnInit } from '@angular/core';
import { TruckComponet } from '../truck/truck';
import { TruckSlot, TruckZone } from '../../../domain/model/truck-slot';
import { TruckSlotComponent } from '../truck-slot/truck-slot';
import { Truck } from '../../../domain/model/truck';

@Component({
  selector: 'app-truck-zone',
  imports: [TruckSlotComponent],
  templateUrl: './truck-zone.html',
  styleUrl: './truck-zone.scss',
})
export class TruckZoneComponent implements OnInit {
  @Input() incomingTrucks: Truck[] = [];

  truckSlots: TruckZone = {
    slot1: {
      idSlot: 1,
      isActive: false,
    },
    slot2: {
      idSlot: 2,
      isActive: false,
    },
    slot3: {
      idSlot: 3,
      isActive: false,
    },
    slot4: {
      idSlot: 4,
      isActive: false,
    },
  };

  constructor() {}

  ngOnInit() {
    console.log('ngOnInit', this.incomingTrucks);
    this.assignTruckToSlot();
    this.timerAction();
  }

  timerAction() {
    setInterval(() => {
      this.updateTimeLeft();
      console.log(this.incomingTrucks);
      this.assignTruckToSlot();
    }, 1000);
  }

  assignTruckToSlot() {
    this.incomingTrucks.forEach((truck) => {
      if (truck.isActive && !truck.isUnloaded) {
        this.loadTruckToSlot(truck);
      }

      if (!truck.isActive) {
        this.incomingTrucks.splice(this.incomingTrucks.indexOf(truck), 1);
      }
    });
  }

  loadTruckToSlot(truck: Truck) {
    if (this.truckSlots.slot1 && !this.truckSlots.slot1.truckOnSlot) {
      this.truckSlots.slot1.truckOnSlot = truck;
      this.incomingTrucks[this.incomingTrucks.indexOf(truck)].isUnloaded = true;
      return;
    }

    if (this.truckSlots.slot2 && !this.truckSlots.slot2.truckOnSlot) {
      this.truckSlots.slot2.truckOnSlot = truck;
      this.incomingTrucks[this.incomingTrucks.indexOf(truck)].isUnloaded = true;
      return;
    }

    if (this.truckSlots.slot3 && !this.truckSlots.slot3.truckOnSlot) {
      this.truckSlots.slot3.truckOnSlot = truck;
      this.incomingTrucks[this.incomingTrucks.indexOf(truck)].isUnloaded = true;
      return;
    }

    if (this.truckSlots.slot4 && !this.truckSlots.slot4.truckOnSlot) {
      this.truckSlots.slot4.truckOnSlot = truck;
      this.incomingTrucks[this.incomingTrucks.indexOf(truck)].isUnloaded = true;
      return;
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
          slot.truckOnSlot = undefined;
        }
      }
    });
  }
}
