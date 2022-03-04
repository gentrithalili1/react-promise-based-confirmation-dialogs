import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { ConfirmationData } from "../../types";

import "./ConfirmationModal.scss";

export interface ConfirmationModalProps {
  showCloseButton?: boolean;
  confirmationData: ConfirmationData;
}

export default function ConfirmationModal(props: ConfirmationModalProps) {
  const {
    confirmationData: { text, description, isOpen, onCancel, onConfirm, customComponent },
  } = props;

  // const router = useRouter();
  // useEffect(() => {
  //   cancel();
  // }, [router.location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const confirm = () => {
    onConfirm?.();
  };

  const cancel = () => {
    onCancel?.();
  };

  const renderCustomComponent = () => {
    const {
      confirmationData: { customComponent, ...rest },
    } = props;

    return customComponent?.(rest);
  };

  return (
    <Modal hideFooter open={isOpen} onClose={cancel} onConfirm={confirm}>
      {customComponent ? (
        renderCustomComponent()
      ) : (
        <div className="ConfirmationModal">
          <h2>{text}</h2>
          <p>{description}</p>
          <div className="mt">
            <Button className="mr" onClick={confirm}>
              confirm
            </Button>
            <Button onClick={cancel}>reject</Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
