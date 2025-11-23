import type { FastifyRequest, FastifyReply } from "fastify";
import { walletService } from "../services/walletService.js";
import { WalletSelector } from "../components/WalletSelector.js";

interface SelectWalletBody {
  walletId: string;
}

/**
 * Handle wallet selection
 * POST /wallet/select
 */
export async function postSelectWallet(
  request: FastifyRequest<{ Body: SelectWalletBody }>,
  reply: FastifyReply
) {
  const { walletId } = request.body;

  // Update the selected wallet in the service
  const selectedWallet = walletService.selectWallet(walletId);

  if (!selectedWallet) {
    return reply.code(404).send({ error: "Wallet not found" });
  }

  // Get all wallets with updated selection
  const wallets = walletService.getAllWallets();

  // Return the updated WalletSelector component (dropdown will be closed via Alpine.js)
  return reply.html(<WalletSelector wallets={wallets} />);
}
