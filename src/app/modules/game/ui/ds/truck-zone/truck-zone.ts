import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  output,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TruckZone } from '../../../domain/model/truck-slot';
import { TruckSlotComponent } from '../truck-slot/truck-slot';
import { Truck } from '../../../domain/model/truck';
import { Box } from '../../../domain/model/box';
import { Product } from '../../../domain/model/product';
import { environment } from '../../../../../enviroments/enviroment';

@Component({
  selector: 'app-truck-zone',
  imports: [TruckSlotComponent],
  templateUrl: './truck-zone.html',
  styleUrl: './truck-zone.scss',
})
export class TruckZoneComponent implements OnChanges {
  @Input() products: Product[] = [];
  @Output() boxClicked = new EventEmitter<Box[]>();
  @Input() correctBoxes: Box[] = [];

  @Input() actualTruckGone: number = 0;
  @Output() updateTruckGone = new EventEmitter<number>();

  @Input() statusGame: 'score' | 'playing' | 'gameover' = 'playing';

  @Input() gameTimeLeft: number = 0;
  @Output() gameTimeLeftChange = new EventEmitter<number>();

  boxesSelected: Box[] = [];

  truckSlots: TruckZone = {
    slot1: {
      idSlot: 1,
    },
    slot2: {
      idSlot: 2,
    },
    slot3: {
      idSlot: 3,
    },
    slot4: {
      idSlot: 4,
    },
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['products'] && !changes['products'].firstChange) {
      this.updateTrucks();
      this.UpdateCycle();
    }

    if (changes['correctBoxes'] && !changes['correctBoxes'].firstChange) {
      if (this.correctBoxes.length > 0) {
        this.deleteCorrectBox();
      }
      this.boxesSelected = [];
    }

    if (changes['statusGame'] && !changes['statusGame'].firstChange) {
      if (this.statusGame != 'playing') {
      }
    }
  }

  deleteCorrectBox() {
    Object.keys(this.truckSlots).forEach((key) => {
      const slot = this.truckSlots[key as keyof TruckZone];
      const slotId = slot?.idSlot;

      this.truckSlots[key as keyof TruckZone]?.truckOnSlot?.boxes?.forEach((box, index) => {
        if (
          this.correctBoxes.find(
            (correctBox) => correctBox.boxId === box.boxId && correctBox.slotId === slotId
          )
        ) {
          this.truckSlots[key as keyof TruckZone]?.truckOnSlot?.boxes?.splice(index, 1);
        }
      });
    });
  }

  UpdateCycle() {
    setInterval(() => {
      if (this.statusGame != 'playing') {
        return;
      }
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
      timeLeft: environment.maxTime,
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
      const randomIndex = Math.floor(Math.random() * this.products.length);
      const product = this.products[randomIndex];
      boxes.push({
        boxId: i + 1,
        productId: product.productId,
        categoryId: product.categoryId,
        imageUrl: product.imageUrl,
      });
    }

    return boxes;
  }

  removeInactiveTrucks() {
    Object.keys(this.truckSlots).forEach((key) => {
      const slot = this.truckSlots[key as keyof TruckZone];
      if (slot && slot.truckOnSlot && !slot.truckOnSlot.isActive) {
        slot.truckOnSlot = undefined;
        this.boxesSelected = this.boxesSelected.filter((box) => box.slotId != slot?.idSlot);
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
    this.gameTimeLeftChange.emit(this.gameTimeLeft - 1);

    // Recorre todos los slots de camiones

    Object.keys(this.truckSlots).forEach((key) => {
      const slot = this.truckSlots[key as keyof TruckZone];

      // Actualiza el tiempo restante del camión en el slot
      if (slot && slot.truckOnSlot) {
        // Decrementa el tiempo restante si es mayor que 0
        if (slot.truckOnSlot.timeLeft > 0) {
          slot.truckOnSlot.timeLeft -= 1;
        }

        // Si el tiempo llega a 0, marca el camión como inactivo
        if (slot.truckOnSlot.timeLeft === 0) {
          slot.truckOnSlot.isActive = false;
          this.actualTruckGone += 1;

          this.gameTimeLeftChange.emit(this.gameTimeLeft - 10);

          this.updateTruckGone.emit(this.actualTruckGone);
        }

        // Si el camión está descargado y no tiene cajas, lo marca como inactivo
        if (slot && slot?.truckOnSlot?.boxes?.length == 0) {
          slot.truckOnSlot.isUnloaded = true;
          slot.truckOnSlot.isActive = false;
        }
      }
    });
  }

  onBoxClicked(event: any) {
    // Si el evento es nulo, no hacer nada
    if (event == null) return;

    // Evita agregar cajas duplicadas
    if (
      this.boxesSelected.find((box) => box.boxId === event.boxId && box.slotId === event.slotId)
    ) {
      return;
    }

    this.boxesSelected?.push(event);

    this.boxClicked.emit(this.boxesSelected);
  }
}
