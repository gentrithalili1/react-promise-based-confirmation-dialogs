import Modal from "../Modal/Modal";

import "./ConfirmationModal.scss";

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
  const { confirmationData } = props;

  // const router = useRouter();
  // useEffect(() => {
  //   cancel();
  // }, [router.location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const confirm = () => {
    confirmationData.onConfirm?.();
  };

  const cancel = () => {
    confirmationData.onCancel?.();
  };

  return (
    <Modal
      open={confirmationData.isOpen}
      onClose={cancel}
      // onConfirm={confirm}
      // title={confirmationData.text}
      // confirmLabel="PO"
      // cancelLabel="JO"
    >
      <div className="ConfirmationModal">
        <h2>{confirmationData.text}</h2>
      </div>
    </Modal>
  );
}
