// AppContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextProps {
  collapsed: boolean;
  toggleCollapse: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <AppContext.Provider value={{ collapsed, toggleCollapse }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
