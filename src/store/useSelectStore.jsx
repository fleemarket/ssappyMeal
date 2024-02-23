import { create } from "zustand";
import { devtools } from 'zustand/middleware'


const which_day = new Date().getDay()

const useSelectStore = create(devtools((set) => ({
  days: which_day,
  setDays: (days) => set({ days: days }), 
})));

export default useSelectStore;