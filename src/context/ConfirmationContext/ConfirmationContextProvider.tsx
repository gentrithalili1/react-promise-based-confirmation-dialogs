import React, { ReactNode, useState } from "react";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import {
  ConfirmationContext,
  ConfirmationContextType,
} from "./ConfirmationContext";

interface ConfirmationContextProviderProps {
  children: ReactNode;
}

interface ConfirmationContextProviderState {
  text?: string;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const defaultText = "Are you sure?";

export default function ConfirmationContextProvider(
  props: ConfirmationContextProviderProps
) {
  const [state, setState] = useState<ConfirmationContextProviderState>({
    text: defaultText,
    isOpen: false,
    onConfirm: () => {},
    onCancel: () => {},
  });

  function confirm(txt?: string) {
    const text = txt || defaultText;
    return new Promise((resolve, reject) => {
      setState({
        text: text,
        isOpen: !state.isOpen,
        onConfirm() {
          setState({ ...state, isOpen: false, text: text });
          resolve(true);
        },
        onCancel() {
          setState({ ...state, isOpen: false, text: text });
          reject(false);
        },
      });
    });
  }

  const context: ConfirmationContextType = {
    isOpen: state.isOpen,
    confirm: confirm,
  };

  return (
    <ConfirmationContext.Provider value={context}>
      <ConfirmationModal confirmationData={state} />
      {props.children}
    </ConfirmationContext.Provider>
  );
}
