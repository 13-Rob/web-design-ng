import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { LogInComponent } from './components/log-in/log-in.component';
import { ReviewEditorComponent } from './components/review-editor/review-editor.component';

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
    GamePageComponent,
    LogInComponent,
    ReviewEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
