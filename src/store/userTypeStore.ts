import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserType = 'founder' | 'builder' | null;

interface UserTypeState {
  userType: UserType;
  setUserType: (type: UserType) => void;
}

export const useUserTypeStore = create<UserTypeState>()(
  persist(
    (set) => ({
      userType: null,
      setUserType: (type) => set({ userType: type }),
    }),
    {
      name: 'user-type-storage',
    }
  )
); 