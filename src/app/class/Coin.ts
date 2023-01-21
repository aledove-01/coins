export interface Coin {
    id: number
    name: string
    symbol: string
    slug: string
    circulating_supply: number
    total_supply: number
    max_supply: number
    last_updated: string
    self_reported_circulating_supply: any
    self_reported_market_cap: any
    quote: any
    price: number
    logo: string
  }