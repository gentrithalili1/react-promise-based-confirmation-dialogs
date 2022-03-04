import Modal from "../Modal/Modal";

import "./ConfirmationModal.scss";
import Button from "../Button/Button";

export interface ConfirmationModalProps {
  showCloseButton?: boolean;
  confirmationData: {
    text?: string;
    isOpen: boolean;
    isLoading?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
  };
}

export default function ConfirmationModal(props: ConfirmationModalProps) {
  const {
    confirmationData: { onCancel, onConfirm, text, isOpen },
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

  return (
    <Modal hideFooter open={isOpen} onClose={cancel} onConfirm={confirm}>
      <div className="ConfirmationModal">
        <h2>{text}</h2>

        <div className="mt">
          <Button className="mr" onClick={confirm}>
            confirm
          </Button>
          <Button onClick={cancel}>reject</Button>
        </div>
      </div>
    </Modal>
  );
}
