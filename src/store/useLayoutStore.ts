import { create } from "zustand";

interface LayoutState {
  leftImageUrl: string;
  leftImageCaption: string | null;
  leftImageSubCaption: string | null;

  setLeftContent: (url: string, caption?: string | null, subCaption?: string | null) => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  leftImageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", 
  leftImageCaption: "Luminous",
  leftImageSubCaption: "Visual Design",
  setLeftContent: (url, caption = null, subCaption = null) => 
    set({ leftImageUrl: url, leftImageCaption: caption, leftImageSubCaption: subCaption }),
}));
