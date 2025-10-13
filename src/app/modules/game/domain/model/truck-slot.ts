import { Truck } from './truck';

export interface TruckSlot {
  idSlot: number;
  truckOnSlot?: Truck;
}

export interface TruckZone {
  slot1?: TruckSlot;
  slot2?: TruckSlot;
  slot3?: TruckSlot;
  slot4?: TruckSlot;
}
