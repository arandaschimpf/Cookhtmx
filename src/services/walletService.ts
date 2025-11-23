import type { Wallet } from '../types/wallet.js';
import { mockWallets } from '../types/wallet.js';

/**
 * WalletService
 *
 * Manages wallet state including the list of wallets and which one is selected.
 * For now, this keeps state in memory. In production, this would connect to a database.
 */
class WalletService {
  private wallets: Wallet[];

  constructor() {
    // Initialize with mock data
    this.wallets = [...mockWallets];
  }

  /**
   * Get all wallets
   */
  getAllWallets(): Wallet[] {
    return this.wallets;
  }

  /**
   * Get the currently selected wallet
   */
  getSelectedWallet(): Wallet | undefined {
    return this.wallets.find(wallet => wallet.isSelected);
  }

  /**
   * Select a wallet by ID and deselect all others
   */
  selectWallet(walletId: string): Wallet | undefined {
    // Deselect all wallets
    this.wallets.forEach(wallet => {
      wallet.isSelected = false;
    });

    // Select the specified wallet
    const wallet = this.wallets.find(w => w.id === walletId);
    if (wallet) {
      wallet.isSelected = true;
    }

    return wallet;
  }

  /**
   * Get total balance across all wallets
   */
  getTotalBalance(): { sol: number; usd: number } {
    return this.wallets.reduce(
      (acc, wallet) => ({
        sol: acc.sol + wallet.solBalance,
        usd: acc.usd + wallet.usdBalance,
      }),
      { sol: 0, usd: 0 }
    );
  }
}

// Export a singleton instance
export const walletService = new WalletService();
