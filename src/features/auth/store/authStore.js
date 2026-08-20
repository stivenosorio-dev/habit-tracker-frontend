import { create } from "zustand";
import { subscribeToAuthState, signOutUser } from "../../../lib/firebase/authService";
import { getAuthenticatedProfile } from "../../../lib/api/sessionApi";

export const useAuthStore = create((set) => ({
  firebase: null,
  profile: null,
  isInicializing: true,
  error: null,
  unsubscribe: null,

  initialize: () => {
    const unsubscribe = subscribeToAuthState(async (firebaseUser) => {
      if (!firebaseUser) {
        set({
          firebaseUser: null,
          profile: null,
          isInitializing: false,
          error: null,
        });
        return;
      }

      try {
        const profile = await getAuthenticatedProfile();
        set({
          firebaseUser,
          profile,
          isInitializing: false,
          error: null,
        });
      } catch (error) {
        set({
          firebaseUser,
          profile: null,
          isInitializing: false,
          error: error.message,
        });
      }
    });

    set({ unsubscribe });
  },

  singOut: async () => {
    await signOutUser();
    set({
      firebaseUser: null,
      profile: null,
      error: null,
    });
  },
  clearError: () => set({ error: null }),
}));


