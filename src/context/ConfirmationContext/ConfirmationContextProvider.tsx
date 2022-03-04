import React, { PropsWithChildren, useState } from "react";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import {
  ConfirmationContext,
  ConfirmationContextType,
} from "./ConfirmationContext";

interface ConfirmationContextProviderProps {}

interface ConfirmationContextProviderState {
  text?: string;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const voidFunction = () => {};
const defaultText = "Are you sure?";

export default function ConfirmationContextProvider(
  props: PropsWithChildren<ConfirmationContextProviderProps>
) {
  const [state, setState] = useState<ConfirmationContextProviderState>({
    text: defaultText,
    isOpen: false,
    onConfirm: voidFunction,
    onCancel: voidFunction,
  });

  function confirm(txt?: string) {
    const text = txt || defaultText;
    return new Promise((resolve, reject) => {
      setState({
        text: text,
        isOpen: !state.isOpen,
        onConfirm() {
          setState({ ...state, isOpen: false, text });
          resolve(true);
        },
        onCancel() {
          setState({ ...state, isOpen: false, text });
          reject(false);
        },
      });
    });
  }

  const context: ConfirmationContextType = {
    confirm: confirm,
  };

  return (
    <ConfirmationContext.Provider value={context}>
      <ConfirmationModal confirmationData={state} />
      {props.children}
    </ConfirmationContext.Provider>
  );
}
