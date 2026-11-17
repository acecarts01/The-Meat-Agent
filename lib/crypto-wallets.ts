export interface CryptoWalletOption {
  id: string;
  coin: string;
  network: string;
  address: string;
  /** URI scheme prefix used to encode the QR payload, e.g. "bitcoin:" */
  uriScheme?: string;
}

export const CRYPTO_WALLETS: CryptoWalletOption[] = [
  { id: 'btc', coin: 'Bitcoin', network: 'BTC', address: 'bc1qdhgnlpctw37vg825eejkknurpm23a5lsthfdhg', uriScheme: 'bitcoin:' },
  { id: 'eth', coin: 'Ethereum', network: 'ETH', address: '0x2629c24d3720E5A24adBe7Bde4677334B559C36D', uriScheme: 'ethereum:' },
  { id: 'usdt-erc20', coin: 'USDT', network: 'ERC-20 / Ethereum', address: '0x2629c24d3720E5A24adBe7Bde4677334B559C36D' },
  { id: 'usdt-trc20', coin: 'USDT', network: 'TRC-20 / Tron', address: 'TVQGzSJKcHXTwX6Fn8CPb6A5PmAkoCFZRh' },
  { id: 'bnb-bep20', coin: 'BNB', network: 'BEP-20 / BSC', address: '0x2629c24d3720E5A24adBe7Bde4677334B559C36D' },
  { id: 'doge', coin: 'Dogecoin', network: 'DOGE', address: 'DQiMuCNgLSaVzeJuw8TL5CMkYKtdpst5Rc' },
  { id: 'ltc', coin: 'Litecoin', network: 'LTC', address: 'ltc1q65vx7y70uxtemnmvu3grsfnuydngfzk7ngqx82', uriScheme: 'litecoin:' },
  { id: 'bch', coin: 'Bitcoin Cash', network: 'BCH', address: 'qq9l4ntg9nf9a7qz5h9he7mh4ktzf6prrgcg7htn9t' },
  { id: 'xrp', coin: 'XRP', network: 'XRP Ledger', address: 'rBiWxdA3a27BXYC9ZwQRTyFdXNWaEjLfBr' },
  { id: 'sol', coin: 'Solana', network: 'SOL', address: 'GdNUybxyu8cBY7snHAZsdopH6WKdHBVXo5d79mR9PhJ' },
  { id: 'trx', coin: 'Tron', network: 'TRX', address: 'TVQGzSJKcHXTwX6Fn8CPb6A5PmAkoCFZRh' },
];
