import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { CardsService } from './cards.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'sfc-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  cards$!: Observable<Card[]>;
  constructor(private cardsService: CardsService) {}

  ngOnInit() {
    this.cards$ = this.cardsService.getAllCards();
  }
}
