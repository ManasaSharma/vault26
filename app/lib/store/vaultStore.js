import { create } from 'zustand';

/**
 * vaultStore.js
 *
 * Global state for all vault portfolio data
 * Fetch ONCE, use EVERYWHERE
 */

export const useVaultStore = create((set) => ({
  // ========== STATE ==========
  data: null,
  loading: true,
  error: null,

  // ========== ACTIONS ==========
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('/api/data');
      if (!res.ok) throw new Error('Failed to fetch data');
      const data = await res.json();
      set({ data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Reset store
  reset: () => {
    set({ data: null, loading: true, error: null });
  },
}));