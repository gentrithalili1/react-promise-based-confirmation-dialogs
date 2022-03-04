import React, { useContext } from "react";

const defaultContext = {
  confirm: () => new Promise((resolve) => resolve),
};

export interface ConfirmationContextType {
  confirm: (text?: string) => Promise<any>;
}

export const ConfirmationContext =
  React.createContext<ConfirmationContextType>(defaultContext);

export function useConfirmation() {
  return useContext(ConfirmationContext);
}
