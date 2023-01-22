import { Component, OnInit, OnDestroy} from '@angular/core';
import { Coin } from 'src/app/class/Coin';
import { CoinsService } from 'src/app/services/coins.service';
import { interval, Subscription } from 'rxjs';
import { ConversorCoinsService } from 'src/app/services/conversor-coins.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit, OnDestroy{
  constructor(
    private coinsService:CoinsService,
    private conversorCoinsService:ConversorCoinsService
  ){}

  listCoins: Coin[] = [];
  coinIds:number[] = [];
  selCoin:Coin = {
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

  private intervalSubscription: Subscription = Subscription.EMPTY;
  
  ngOnInit() {
    this.conversorCoinsService.coinSel$.subscribe(coinSel => {
      this.selCoin = coinSel;
    });
    this.coinsService.getListCoins().subscribe(colCoins => {
      this.listCoins = colCoins;
      this.coinIds = this.listCoins.map(coin => coin.id);
    this.intervalSubscription = interval(300000)
      .subscribe(() => this.getPrices());
  
    });
  }  
    

  ngOnDestroy() {
    this.intervalSubscription.unsubscribe();
  }

  private getPrices() {
    console.log(this.coinIds)
    this.coinsService.getCoinsPrice(this.coinIds).subscribe(colCoins => {
      if (colCoins != null){
        console.log('consulta',colCoins)
        this.listCoins.forEach(coin => {
          let price:number | undefined = colCoins.find(coinPrice => coinPrice.id === coin.id)?.price;
          coin.price = Number(price);
        });
        this.conversorCoinsService.updateCalculo();
      }
    });
  }


}
