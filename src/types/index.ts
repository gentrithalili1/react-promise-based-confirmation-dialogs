import { ReactNode } from "react";

export interface ConfirmationData {
  text?: string;
  description?: string;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: (reason?: string) => void;
  customComponent?: (params: Omit<ConfirmationData, "customComponent">) => ReactNode;
}

export interface ConfirmParams
  extends Omit<ConfirmationData, "onConfirm" | "onCancel" | "isOpen"> {}
