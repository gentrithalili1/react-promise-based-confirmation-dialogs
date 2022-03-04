import { FC } from "react";
import ConfirmationContextProvider from "./ConfirmationContext/ConfirmationContextProvider";

const combineProviders = (...components: FC[]): FC => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }) => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};

/**
 *  The order of the providers is significant
 *  NOTE: If you need to change the order, DO IT CAREFULLY!
 */
const providers = [ConfirmationContextProvider];

const AppContextProviders = combineProviders(...(providers as FC[]));

export default AppContextProviders;
