/**
 * Shared TypeScript types and interfaces
 *
 * This file exports common types used across the application.
 * Add your domain models, DTOs, and shared interfaces here.
 */

// Example: User type (placeholder for future use)
export interface User {
  id: string;
  email: string;
  name: string;
}

// Example: API Response wrapper
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

// Add your custom types below
// export interface YourCustomType { ... }
