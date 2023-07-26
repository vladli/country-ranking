"use client";
import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import ModalActions from "./ModalActions";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";

type Props = React.HTMLAttributes<HTMLDialogElement> & {
  open?: boolean;
  responsive?: boolean;
};

const Modal = forwardRef<HTMLDialogElement, Props>(
  ({ children, open, responsive, className, ...props }, ref) => {
    const classes = twMerge(
      "modal",
      clsx({
        "modal-open": open,
        "modal-bottom sm:modal-middle": responsive,
      })
    );
    const bodyClasses = twMerge("modal-box", className);

    return (
      <dialog
        aria-hidden={!open}
        aria-label="Modal"
        aria-modal={open}
        className={classes}
        ref={ref}
      >
        <form
          className={bodyClasses}
          method="dialog"
        >
          <button className="btn-sm btn-circle btn absolute right-2 top-2">
            ✕
          </button>
          {children}
        </form>
        <form
          className="modal-backdrop"
          method="dialog"
        >
          <button>close</button>
        </form>
      </dialog>
    );
  }
);
Modal.displayName = "Modal";

export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Actions: ModalActions,
});
