import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoinsComponent } from './components/coins/coins.component';
import { CoinComponent } from './components/coin/coin.component';
import { ConversionCoinsComponent } from './components/conversion-coins/conversion-coins.component';
import { TimerComponent } from './components/timer/timer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    CoinComponent,
    ConversionCoinsComponent,
    TimerComponent
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
