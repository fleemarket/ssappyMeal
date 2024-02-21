import { create } from "zustand";

const which_day = new Date().getDay()

const useSelectStore = create((set) => ({
  days: which_day,
  setDays: (selectedDays) => set({ days: selectedDays }), // 선택한 요일을 상태에 저장하는 함수
}));

export default useSelectStore;