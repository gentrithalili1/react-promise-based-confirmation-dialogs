import React from "react";
import wait from "./utils/wait";
import { useConfirmation } from "./context/ConfirmationContext/ConfirmationContext";

function App() {
  const confirmation = useConfirmation();

  const handleConfirmation = async () => {
    try {
      await confirmation.confirm("Test 1");
      await wait(1000);
      await confirmation.confirm("Test 2");
      await wait(2000);
      await confirmation.confirm("Test 3");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <button onClick={handleConfirmation}>open</button>
    </div>
  );
}

export default App;
