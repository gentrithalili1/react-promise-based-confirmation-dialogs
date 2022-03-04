import { useContext, createContext } from "react";
import { ConfirmParams } from "../../types";

const defaultContext = {
  confirm: () => new Promise((resolve) => resolve),
};

export interface ConfirmationContextType {
  confirm: (params: ConfirmParams) => Promise<any>;
}

export const ConfirmationContext = createContext<ConfirmationContextType>(defaultContext);

export function useConfirmation() {
  return useContext(ConfirmationContext);
}
