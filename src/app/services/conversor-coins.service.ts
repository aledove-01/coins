import { Injectable } from '@angular/core';
import { Coin } from 'src/app/class/Coin';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorCoinsService {
  private valueForCalculate=0;
  private coinSel = new BehaviorSubject<Coin>({
    id: 0,
    name: '',
    symbol: '',
    slug: '',
    circulating_supply: 0,
    total_supply: 0,
    max_supply: 0,
    last_updated: '',
    self_reported_circulating_supply: 0,
    self_reported_market_cap: 0,
    price: 0,
    logo: '',
  });
  private valueCalculate = new BehaviorSubject<number>(0);
  private coinSelected:Coin = {
    id: 0,
    name: '',
    symbol: '',
    slug: '',
    circulating_supply: 0,
    total_supply: 0,
    max_supply: 0,
    last_updated: '',
    self_reported_circulating_supply: 0,
    self_reported_market_cap: 0,
    price: 0,
    logo: '',
  };
  coinSel$ = this.coinSel.asObservable();
  valueConversion$ = this.valueCalculate.asObservable();


  updateValueForCalculate(value:number){
    //Update value and emit event
    this.valueForCalculate = value;
    this.valueCalculate.next(this.valueForCalculate);
  }
  getValueForCalculate(){
    return this.valueForCalculate;
  }

  updateSelectedCoin(coin:Coin){
    console.log('service',coin);
    this.coinSelected = coin;
    this.coinSel.next(this.coinSelected);
  }
  getSelectedCoin(){
    return this.coinSelected;
  }
}
