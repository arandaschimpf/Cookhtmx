export interface Position {
  symbol: string;
  mint: string;
  price: number;
  holdings: number;
  changePercent: number;
  imageUrl: string;
}

export const mockPositions: Position[] = [
  {
    symbol: 'BetFlix',
    mint: 'GvtL...ump',
    price: 0.00010,
    holdings: 0.00010,
    changePercent: 0.0,
    imageUrl: 'https://metadata.rapidlaunch.io/images/32935bad-b170-40d8-ab55-02fdf6f47c06.jpg'
  },
  {
    symbol: 'THC',
    mint: 'ipfs...WTF',
    price: 0.00001,
    holdings: 0.00001,
    changePercent: -0.6,
    imageUrl: 'https://ipfs.io/ipfs/QmVLUr3Vne1KhDNxYwsX4cGekB7TYm7njKJB57x49rV8q1'
  },
  {
    symbol: 'SONIC',
    mint: '7mFC...ray',
    price: 0.000003,
    holdings: 0.000003,
    changePercent: -85.7,
    imageUrl: 'https://ipfs.io/ipfs/bafybeifvvvfq6g7gkfpsa2sbv2wcycke2rpphjsp25qgtibnb32aqksniy'
  },
  {
    symbol: 'save',
    mint: 'F6bk...ump',
    price: 0.000002,
    holdings: 0.000002,
    changePercent: -84.7,
    imageUrl: 'https://ipfs.io/ipfs/bafkreiawop7bpndaj44zhv5ex55ovgapketob2drak22vzurybamk74pmq'
  },
  {
    symbol: 'EPSTEIN',
    mint: '4ZBE...ump',
    price: 0.000099,
    holdings: 0.000099,
    changePercent: 0.001,
    imageUrl: 'https://dev.cooking.gg/img/tokens/no-image.png'
  }
];
