import { Component, Input } from '@angular/core';
import { Card } from '..';

@Component({
  selector: 'sfc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card: Card | undefined;
}
