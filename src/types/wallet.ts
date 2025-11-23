export interface Wallet {
  id: string;
  name: string;
  address: string;
  solBalance: number;
  usdBalance: number;
  isSelected: boolean;
}

export const mockWallets: Wallet[] = [
  {
    id: '1',
    name: 'Cooking Wallet #01',
    address: '2kKR...uJK1',
    solBalance: 0.010287,
    usdBalance: 2.50,
    isSelected: true,
  },
  {
    id: '2',
    name: 'Account 1-key',
    address: 'E1JZ...u5do',
    solBalance: 0.089,
    usdBalance: 21.36,
    isSelected: false,
  },
  {
    id: '3',
    name: 'Account 2-key',
    address: '3nDz...k9Qk',
    solBalance: 0,
    usdBalance: 0,
    isSelected: false,
  },
  {
    id: '4',
    name: 'External-key',
    address: 'J7VM...29W2',
    solBalance: 0.002452,
    usdBalance: 0.59,
    isSelected: false,
  },
];
