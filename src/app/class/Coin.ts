export interface Coin {
    id: number
    name: string
    symbol: string
    slug: string
    circulating_supply: number
    total_supply: number
    max_supply: number
    last_updated: string
    self_reported_circulating_supply: number
    self_reported_market_cap: number
    //quote: any
    price: number
    logo: string
  }