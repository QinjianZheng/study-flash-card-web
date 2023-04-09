import { Card } from '../cards';

export interface List {
  id: number;
  name: string;
  cards: Card[];
}
