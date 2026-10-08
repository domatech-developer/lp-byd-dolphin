"use client";

import { createContext, useContext, useState } from "react";

interface ModelSelectionContextProps {
  activeId: string;
  setActiveId: (id: string) => void;
}

const ModelSelectionContext = createContext<ModelSelectionContextProps | null>(null);

export const ModelSelectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeId, setActiveId] = useState("dolphin-se");

  return <ModelSelectionContext.Provider value={{ activeId, setActiveId }}>{children}</ModelSelectionContext.Provider>;
};

export const useModelSelection = () => {
  const ctx = useContext(ModelSelectionContext);
  if (!ctx) throw new Error("useModelSelection must be used within ModelSelectionProvider");
  return ctx;
};
