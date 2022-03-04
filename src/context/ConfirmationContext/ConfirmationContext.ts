import React, { useContext } from "react";

const defaultContext = {
  isOpen: false,
  confirm: () => new Promise((resolve) => resolve),
};
export interface ConfirmationContextType {
  isOpen: boolean;
  confirm: (text?: string) => any;
}

export const ConfirmationContext =
  React.createContext<ConfirmationContextType>(defaultContext);

export function useConfirmation() {
  return useContext(ConfirmationContext);
}
