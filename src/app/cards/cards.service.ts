import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Card } from '.';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';

const API_URL = 'https://localhost:7038';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private http: HttpClient) {}

  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(API_URL + '/card/all');
  }

  getCard(id: number) {
    return this.http.get<Card>(`${API_URL}/card/${id}`);
  }
}

export const cardResolver: ResolveFn<Card> = (route: ActivatedRouteSnapshot) =>
  inject(CardsService)
    .getCard(Number(route.paramMap.get('id')))
    .pipe(catchError((error) => of(error)));
