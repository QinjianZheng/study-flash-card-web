import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardsComponent } from './cards/cards.component';
import { ListsComponent } from './lists/lists.component';
import { UserComponent } from './user/user.component';
import { CardComponent } from './cards/card/card.component';
import { CardDetailComponent } from './cards/card-detail/card-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardsComponent,
    ListsComponent,
    UserComponent,
    CardComponent,
    CardDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
