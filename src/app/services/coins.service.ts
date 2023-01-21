import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(
    private http: HttpClient
  ) { }

  getListCoins(){
    return this.http.get('http://localhost:5118/API/AccessDataCryptoCoins/TopCoins');
  }
}
