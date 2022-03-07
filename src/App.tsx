import React, { useState } from "react";
import Button from "./components/Button/Button";
import ConfirmationOne from "./components/ConfirmationOne/ConfirmationOne";
import ConfirmationTwo from "./components/ConfirmationTwo/ConfirmationTwo";
import wait from "./utils/wait";
import { useConfirmation } from "./context/ConfirmationContext/ConfirmationContext";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const { confirm } = useConfirmation();
  const [text, setText] = useState("Waiting for confirmation...");
  const [inProgress, setInProgress] = useState(false);

  const handleClick = async () => {
    try {
      setInProgress(true);
      await confirm({
        customComponent: ConfirmationOne,
      });

      setText("Confirmed component 1");

      await wait(3000);

      await confirm({
        text: "Test title from App component",
        description: "Test description from App component",
        customComponent: ConfirmationTwo,
      });

      setText("Confirmed component 2");
    } catch (reason) {
      console.log("Declined", reason);
    } finally {
      setInProgress(false);
    }
  };

  return (
    <div className="App text-center">
      <h1 className="mb">{text}</h1>
      <Button disabled={inProgress} onClick={handleClick}>
        confirm with custom component {inProgress && <Spinner />}
      </Button>
    </div>
  );
}

export default App;
