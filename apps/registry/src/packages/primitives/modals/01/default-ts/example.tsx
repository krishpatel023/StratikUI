"use client";

import { Modal } from "@registry/packages/primitives/modals/01/default-ts/Modal";
import Button from "@registry/ui/Button";
import { useState } from "react";

export default function ModalImplementation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-40 flex flex-col justify-center items-center ">
      <Button className="mt-4" onPress={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal className="max-w-[30rem]" isOpen={isOpen} setOpen={() => setIsOpen(false)}>
        <h1 className="text-xl font-semibold text-primary-foreground mb-4">This is a modal</h1>
        <span>It has various various positions and can be dismissed by:</span>
        <ul className="list-disc ml-4 mt-4">
          <li>Clicking outside the modal</li>
          <li>Clicking the close button</li>
        </ul>
        <Button onPress={() => setIsOpen(false)} className="mt-4">
          Close
        </Button>
      </Modal>
    </div>
  );
}
