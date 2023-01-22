import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Coin } from 'src/app/class/Coin';
import { ConversorCoinsService } from '../../services/conversor-coins.service';

@Component({
  selector: 'app-conversion-coins',
  templateUrl: './conversion-coins.component.html',
  styleUrls: ['./conversion-coins.component.scss']
})
export class ConversionCoinsComponent implements OnInit, OnChanges {
  constructor(
    private conversorCoinsService:ConversorCoinsService
  ){ }
  ngOnChanges(): void {
    this.conversorCoinsService.updateValueForCalculate(this.cantCoin);
  }
  ngOnInit(): void {
    this.conversorCoinsService.coinSel$.subscribe(coinSel => this.selCoin = coinSel);
  }
  selCoin:Coin = this.conversorCoinsService.getSelectedCoin();
  cantCoin = 0;
}
