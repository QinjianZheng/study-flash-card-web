import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { ListsComponent } from './lists/lists.component';
import { CardDetailComponent } from './cards/card-detail/card-detail.component';
import { cardResolver } from './cards';

const routes: Routes = [
  {
    path: 'cards/:id',
    component: CardDetailComponent,
    resolve: { card: cardResolver },
  },
  { path: 'cards', component: CardsComponent },
  { path: 'lists', component: ListsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
