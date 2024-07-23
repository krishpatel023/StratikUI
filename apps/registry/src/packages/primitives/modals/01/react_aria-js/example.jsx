"use client";

import {
  Modal,
  ModalTrigger,
} from "@/packages/primitives/modals/01/react_aria-js/Modal";
import Button from "@/ui/Button";

export default function ModalImplementation() {
  return (
    <div className="min-h-40 flex flex-col justify-center items-center ">
      <ModalTrigger>
        <Button className="mt-4">Open Modal</Button>
        <Modal className="max-w-[30rem]">
          {({ close }) => (
            <>
              <h1 className="text-xl font-semibold text-primary-foreground mb-4">
                This is a modal
              </h1>
              <span>
                It has various various positions and can be dismissed by:
              </span>
              <ul className="list-disc ml-4 mt-4">
                <li>Clicking outside the modal</li>
                <li>Pressing the escape key</li>
                <li>Clicking the close button</li>
              </ul>
              <Button onPress={close} className="mt-4">
                Close
              </Button>
            </>
          )}
        </Modal>
      </ModalTrigger>
    </div>
  );
}
