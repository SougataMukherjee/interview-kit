import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,

  login: (name) =>
    set({
      user: { name },
    }),

  logout: () => set({ user: null }),
}));
