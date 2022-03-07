import { ReactNode } from "react";

export interface ObjectAny {
  [key: string]: any;
}

export interface ConfirmationData {
  text?: string;
  description?: string;
  isOpen: boolean;
  customData?: ObjectAny;
  onConfirm: () => void;
  onCancel: (reason?: string) => void;
  customComponent?: (params: Omit<ConfirmationData, "customComponent">) => ReactNode;
}

export interface ConfirmParams
  extends Omit<ConfirmationData, "onConfirm" | "onCancel" | "isOpen"> {}
