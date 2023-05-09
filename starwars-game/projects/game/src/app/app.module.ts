import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { SearchBarComponent } from './features/search/search-bar/search-bar.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store';
import { EffectsModule } from '@ngrx/effects';
import { GamesEffect } from './features/game/store/effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GameModule,
    SearchBarComponent,
    StoreModule.forRoot(reducers, {}),
    // Chargement des Eager modules (les 20%)
    EffectsModule.forRoot([
      // A plutôt faire dans le GameModule (approche itérative)
      GamesEffect
    ])
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
