import { create } from "zustand";

const which_day = new Date().getDay()

const useSelectStore = create((set) => ({
  days: which_day,
  setDays: (days) => set({ days: days }), 
}));

export default useSelectStore;