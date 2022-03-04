import { PropsWithChildren } from "react";
import Button from "../Button/Button";

import "./Modal.scss";

interface ModalProps {
  open: boolean;
  hideFooter?: boolean;
  title?: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

export default function Modal(props: PropsWithChildren<ModalProps>) {
  const { open, hideFooter, title, children, onClose, onConfirm } = props;

  return (
    <div className={`Modal ${open ? "Modal--visible" : ""}`.trimEnd()}>
      <div className="Modal__wrapper">
        <div className="Modal__head">
          <h3>{title}</h3>
          <Button onClick={onClose} className="Modal__close">
            X
          </Button>
        </div>

        <div className="Modal__body">{children}</div>

        {!hideFooter && (
          <div className="Modal__footer">
            <Button onClick={onConfirm}>Yes</Button>
            <Button onClick={onClose}>No</Button>
          </div>
        )}
      </div>
    </div>
  );
}
