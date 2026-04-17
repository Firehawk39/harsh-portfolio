import { create } from "zustand";

interface LayoutState {
  leftImageUrl: string;
  leftImageCaption: string | null;
  leftImageSubCaption: string | null;
  activeProjectIndex: number | null;
  totalProjects: number;

  setLeftContent: (url: string, caption?: string | null, subCaption?: string | null) => void;
  setActiveProject: (index: number, total: number) => void;
  clearActiveProject: () => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  leftImageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", 
  leftImageCaption: "Luminous",
  leftImageSubCaption: "Visual Design",
  activeProjectIndex: null,
  totalProjects: 0,
  setLeftContent: (url, caption = null, subCaption = null) => 
    set({ leftImageUrl: url, leftImageCaption: caption, leftImageSubCaption: subCaption }),
  setActiveProject: (index, total) =>
    set({ activeProjectIndex: index, totalProjects: total }),
  clearActiveProject: () =>
    set({ activeProjectIndex: null, totalProjects: 0 }),
}));
