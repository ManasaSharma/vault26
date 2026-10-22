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

/**
 * USAGE IN COMPONENTS:
 *
 * import { useVaultStore } from '@/lib/store/vaultStore';
 *
 * function MyComponent() {
 *   const { data, loading, error } = useVaultStore();
 *
 *   if (loading) return <div>Loading...</div>;
 *   if (error) return <div>Error: {error}</div>;
 *
 *   return (
 *     <div>
 *       <h1>{data.metadata.name}</h1>
 *       {data.projects.map(p => <div key={p.id}>{p.name}</div>)}
 *     </div>
 *   );
 * }
 *
 *
 * IN ROOT src/page.jsx:
 *
 * import { useVaultStore } from '@/lib/store/vaultStore';
 *
 * export default function Home() {
 *   const fetchData = useVaultStore(state => state.fetchData);
 *
 *   useEffect(() => {
 *     fetchData();  // Fetch ONCE at app load
 *   }, []);
 *
 *   return (
 *     <>
 *       <Header />
 *       <HeroSection />
 *       <TechStack />
 *       {/* All sections use same data */
