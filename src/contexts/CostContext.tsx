"use client";

import { createContext } from 'react';

interface Props {
  children: React.ReactNode;
}

interface TotalCostContextType {
  totalCost: number;
}

export const TotalCostContext = createContext<TotalCostContextType | undefined>(undefined);

export default function TotalCostCProvider({ children }: Props) {
  const totalCost = 1000;

  return (
    <TotalCostContext.Provider value={{ totalCost }}>
      {children}
    </TotalCostContext.Provider>
  );
}
