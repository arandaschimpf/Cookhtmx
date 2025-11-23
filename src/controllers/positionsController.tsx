import type { FastifyRequest, FastifyReply } from "fastify";
import { walletService } from "../services/walletService.js";
import { positionService } from "../services/positionService.js";
import { PositionsModal } from "../components/PositionsModal.js";

/**
 * GET /positions/modal - Render the positions modal
 */
export async function getPositionsModal(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const selectedWallet = walletService.getSelectedWallet();
  const positions = selectedWallet
    ? positionService.getPositionsByWalletId(selectedWallet.id)
    : [];

  return reply.html(<PositionsModal positions={positions} />);
}

/**
 * GET /positions - Return just the positions list for polling in the header
 */
export async function getPositions(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const selectedWallet = walletService.getSelectedWallet();
  const positions = selectedWallet
    ? positionService.getPositionsByWalletId(selectedWallet.id)
    : [];

  // Import PositionsList component
  const { PositionsList } = await import("../components/PositionsList.js");

  return reply.html(<PositionsList positions={positions} />);
}
