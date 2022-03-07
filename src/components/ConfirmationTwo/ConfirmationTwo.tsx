import { ConfirmationData } from "../../types";
import Button from "../Button/Button";

interface ConfirmationTwoProps extends Omit<ConfirmationData, "customComponent"> {}

const ConfirmationTwo = (props: ConfirmationTwoProps) => {
  return (
    <div>
      <small>Component 2</small>
      <h1>{props.text}</h1>
      <p>{props.description}</p>

      <div>
        <Button onClick={props.onConfirm}>Accept</Button>
        <Button onClick={() => props.onCancel("Decline")}>Decline</Button>
      </div>
    </div>
  );
};

export default ConfirmationTwo;
