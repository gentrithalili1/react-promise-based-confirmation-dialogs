import Button from "../Button/Button";
import { ConfirmationData } from "../../types";

interface ConfirmationOneProps extends Omit<ConfirmationData, "customComponent"> {}

const ConfirmationOne = (props: ConfirmationOneProps) => {
  return (
    <div>
      <small>Component 1</small>
      <h1 className="mb">Are you sure?</h1>
      <Button onClick={props.onConfirm}>Yes</Button>
      <Button onClick={() => props.onCancel("Error")}>No</Button>
    </div>
  );
};

export default ConfirmationOne;
