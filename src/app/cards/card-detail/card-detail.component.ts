import { Component, OnInit } from '@angular/core';
import { Card } from '..';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sfc-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {
  card: Card | undefined;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.card = this.activatedRoute.snapshot.data['card'];
  }
}
