import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileLibModule } from 'profile-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProfileLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
