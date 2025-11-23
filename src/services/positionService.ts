import type { Position } from "../types/position.js";

/**
 * Position Service
 *
 * Manages positions for different wallets.
 * In a real application, this would fetch from a blockchain API or database.
 */

// Mock positions data organized by wallet ID
const positionsByWallet: Record<string, Position[]> = {
  "1": [
    {
      symbol: "BetFlix",
      mint: "GvtL...ump",
      price: 0.0001,
      holdings: 0.0001,
      changePercent: 0.0,
      imageUrl:
        "https://metadata.rapidlaunch.io/images/32935bad-b170-40d8-ab55-02fdf6f47c06.jpg",
    },
    {
      symbol: "THC",
      mint: "ipfs...WTF",
      price: 0.00001,
      holdings: 0.00001,
      changePercent: -0.6,
      imageUrl:
        "https://ipfs.io/ipfs/QmVLUr3Vne1KhDNxYwsX4cGekB7TYm7njKJB57x49rV8q1",
    },
    {
      symbol: "SONIC",
      mint: "7mFC...ray",
      price: 0.000003,
      holdings: 0.000003,
      changePercent: -85.7,
      imageUrl:
        "https://ipfs.io/ipfs/bafybeifvvvfq6g7gkfpsa2sbv2wcycke2rpphjsp25qgtibnb32aqksniy",
    },
  ],
  "2": [
    {
      symbol: "PUMP",
      mint: "8xYZ...abc",
      price: 0.00025,
      holdings: 0.00025,
      changePercent: 15.3,
      imageUrl: "https://dev.cooking.gg/img/tokens/no-image.png",
    },
    {
      symbol: "DOGE",
      mint: "9qWE...def",
      price: 0.00018,
      holdings: 0.00018,
      changePercent: 8.2,
      imageUrl: "https://dev.cooking.gg/img/tokens/no-image.png",
    },
  ],
  "3": [
    {
      symbol: "save",
      mint: "F6bk...ump",
      price: 0.000002,
      holdings: 0.000002,
      changePercent: -84.7,
      imageUrl:
        "https://ipfs.io/ipfs/bafkreiawop7bpndaj44zhv5ex55ovgapketob2drak22vzurybamk74pmq",
    },
    {
      symbol: "EPSTEIN",
      mint: "4ZBE...ump",
      price: 0.000099,
      holdings: 0.000099,
      changePercent: 0.001,
      imageUrl: "https://dev.cooking.gg/img/tokens/no-image.png",
    },
    {
      symbol: "MOON",
      mint: "5ABC...xyz",
      price: 0.00045,
      holdings: 0.00045,
      changePercent: 120.5,
      imageUrl: "https://dev.cooking.gg/img/tokens/no-image.png",
    },
    {
      symbol: "PEPE",
      mint: "6DEF...rst",
      price: 0.00032,
      holdings: 0.00032,
      changePercent: 45.8,
      imageUrl: "https://dev.cooking.gg/img/tokens/no-image.png",
    },
  ],
};

class PositionService {
  /**
   * Get positions for a specific wallet
   */
  getPositionsByWalletId(walletId: string): Position[] {
    return positionsByWallet[walletId] || [];
  }

  /**
   * Get all positions across all wallets
   */
  getAllPositions(): Record<string, Position[]> {
    return positionsByWallet;
  }
}

export const positionService = new PositionService();
