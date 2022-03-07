import React, { useState } from "react";
import Button from "./components/Button/Button";
import { useConfirmation } from "./context/ConfirmationContext/ConfirmationContext";

function App() {
  const [text, setText] = useState("Waiting confirmation ...");
  const { confirm } = useConfirmation();

  const handleClick = async () => {
    try {
      await confirm({
        text: "Are you sure?",
        description: "Lorem ipsum dolor sit.",
      });

      setText("Confirmed!");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App text-center">
      <div className="mt">
        <h1 className="mb">{text}</h1>
        <Button onClick={handleClick}>confirm</Button>
      </div>
    </div>
  );
}

export default App;
