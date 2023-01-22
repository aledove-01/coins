import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Coin } from 'src/app/class/Coin';
import { ConversorCoinsService } from '../../services/conversor-coins.service';

@Component({
  selector: 'app-conversion-coins',
  templateUrl: './conversion-coins.component.html',
  styleUrls: ['./conversion-coins.component.scss']
})
export class ConversionCoinsComponent implements OnInit, OnChanges {
  selCoin: Coin;
  cantCoin = 0;

  constructor(private conversorCoinsService: ConversorCoinsService) {
    this.selCoin = this.conversorCoinsService.getSelectedCoin();
  }

  ngOnInit() {
    this.selCoin = this.conversorCoinsService.getSelectedCoin();
    this.conversorCoinsService.coinSel$.subscribe(coinSel => {
      this.selCoin = coinSel;
      this.cantCoin = 0;
      this.updateValueForCalculate();
    });
  }

  ngOnChanges() {
    this.updateValueForCalculate();
  }

  private updateValueForCalculate() {
    this.conversorCoinsService.updateValueForCalculate(this.cantCoin);
  }
}

