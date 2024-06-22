import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
      loading: true,
      deactivateLoader: () => set({ loader: false }),
    }),
    {
      name: 'loader-storage',
      getStorage: () => localStorage,
      onRehydrateStorage: () => (state) => {
        if (state?.loading) {
          state.deactivateLoader();
        }
      },
    }
  )
);

export default useStore;
