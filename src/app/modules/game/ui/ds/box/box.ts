import { Component, Input } from '@angular/core';
import { Box } from '../../../domain/model/box';

@Component({
  selector: 'app-box',
  imports: [],
  templateUrl: './box.html',
  styleUrl: './box.scss',
})
export class BoxComponent {
  @Input() box?: Box;
}
