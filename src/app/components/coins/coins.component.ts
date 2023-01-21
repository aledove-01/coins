import { Component } from '@angular/core';
import { Coin } from 'src/app/class/coin';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent {
  listCoins:Array<Coin> = [
    {
      "id": 1,
      "name": "Bitcoin",
      "symbol": "BTC",
      "slug": "bitcoin",
      "circulating_supply": 0,
      "total_supply": 0,
      "max_supply": 0,
      "last_updated": "0001-01-01T00:00:00",
      "self_reported_circulating_supply": null,
      "self_reported_market_cap": null,
      "quote": null,
      "price": 23555,
      "logo": 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'
    },
    {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "circulating_supply": 0,
      "total_supply": 0,
      "max_supply": 0,
      "last_updated": "0001-01-01T00:00:00",
      "self_reported_circulating_supply": null,
      "self_reported_market_cap": null,
      "quote": null,
      "price": 2500,
      "logo": 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'
    },
  ];
}
