import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Coin } from '../class/Coin';

@Injectable({
  providedIn: 'root'
})

export class CoinsService {

  constructor(
    private http: HttpClient
  ) { }

  getListCoins(){
    return this.http.get<Coin[]>('http://localhost:5118/API/AccessDataCryptoCoins/TopCoins');
  }
  getCoinsMeta(ids:number[]){
    let params = new HttpParams();
    ids.forEach(id => {
        params = params.append('ids', id);
    });
    return this.http.get<Coin[]>('http://localhost:5118/API/AccessDataCryptoCoins/MetadataCoins',{params});
  }
  getCoinsPrice(ids:number[]){
    let params = new HttpParams();
    ids.forEach(id => {
        params = params.append('ids', id);
    });
    return this.http.get<Coin[]>('http://localhost:5118/API/AccessDataCryptoCoins/PriceCoins',{params});
  }
}
