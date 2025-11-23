import type { FastifyReply, FastifyRequest } from 'fastify';
import { HomePage } from '../views/HomePage.js';
import { Counter } from '../components/Counter.js';
import { walletService } from '../services/walletService.js';

/**
 * Counter Controller
 *
 * Handles all counter-related routes and business logic.
 * In a real application, this would interact with a database or state management system.
 */

// Placeholder state (replace with database/state management)
let count = 0;

/**
 * GET / - Render the home page
 */
export async function getHomePage(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const wallets = walletService.getAllWallets();
  const selectedWallet = walletService.getSelectedWallet();

  return reply.html(<HomePage count={count} wallets={wallets} selectedWallet={selectedWallet} />);
}

/**
 * POST /increment - Increment the counter
 */
export async function postIncrement(
  request: FastifyRequest,
  reply: FastifyReply
) {
  // Increment the counter
  // In a real app, you would:
  // - Validate request data
  // - Update database
  // - Handle errors
  count++;

  return reply.html(<Counter count={count} />);
}
