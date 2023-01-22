import { Component, Input, OnInit } from '@angular/core';
import { Coin } from 'src/app/class/Coin';
import { ConversorCoinsService } from '../../services/conversor-coins.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
  @Input() coin:Coin = {
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
  calculateConversion=0;
  constructor(
    private conversorCoinsService:ConversorCoinsService
  ){}
  ngOnInit(): void {
      this.conversorCoinsService.valueConversion$.subscribe(newValueConvertion => {
      this.calculateConversion = (this.conversorCoinsService.getSelectedCoin().price*newValueConvertion)/this.coin.price
    });
  }

  onClickSelCrypto(){
    this.conversorCoinsService.updateSelectedCoin(this.coin);
  }
}
