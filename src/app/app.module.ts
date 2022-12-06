import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GameRowComponent } from './components/game-row/game-row.component';
import { NewsColComponent } from './components/news-col/news-col.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GamePageComponent } from './components/game-page/game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SignUpComponent,
    HomePageComponent,
    GameRowComponent,
    NewsColComponent,
    SearchResultComponent,
    GameCardComponent,
    GamePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
