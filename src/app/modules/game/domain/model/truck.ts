import { Box } from './box';

export interface Truck {
  timeLeft: number;
  isActive: boolean;
  isUnloaded: boolean;
  boxes?: Box[];
}
