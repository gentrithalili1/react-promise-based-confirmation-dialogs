import React, { PropsWithChildren, useState } from "react";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import { ConfirmationData, ConfirmParams } from "../../types";
import { ConfirmationContext, ConfirmationContextType } from "./ConfirmationContext";

interface ConfirmationContextProviderProps {}

interface ConfirmationContextProviderState extends ConfirmationData {}

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

  function confirm(params: ConfirmParams) {
    const { text: txt, ...restParams } = params;
    const text = txt || defaultText;

    return new Promise((resolve, reject) => {
      setState({
        ...restParams,
        text: text,
        isOpen: !state.isOpen,
        onConfirm: () => {
          setState({ ...state, isOpen: false, text });
          resolve(true);
        },
        onCancel: (reason?: string) => {
          setState({ ...state, isOpen: false, text });
          reject(reason);
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
