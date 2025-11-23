import type { FastifyRequest, FastifyReply } from "fastify";
import { walletService } from "../services/walletService.js";
import { positionService } from "../services/positionService.js";
import { WalletSelector } from "../components/WalletSelector.js";
import { PositionsList } from "../components/PositionsList.js";

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

  // Get positions for the newly selected wallet
  const positions = positionService.getPositionsByWalletId(selectedWallet.id);

  // Return both WalletSelector (primary target) and PositionsList (OOB swap)
  // This updates only the wallet selector and positions, avoiding header flicker
  return reply.html(
    <>
      {/* Primary target - replaces #wallet-selector-container */}
      <WalletSelector wallets={wallets} />

      {/* Out-of-band swap - updates #positions-container */}
      <div
        id="positions-container"
        class="flex items-center justify-start gap-1"
        hx-get="/positions"
        hx-trigger="every 5s"
        hx-swap="innerHTML"
        hx-swap-oob="true"
      >
        <PositionsList positions={positions} />
      </div>
    </>
  );
}
