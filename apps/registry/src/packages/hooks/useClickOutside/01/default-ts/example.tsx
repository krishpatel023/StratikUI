"use client";

import { Modal } from "@registry/packages/hooks/useClickOutside/01/default-ts/Modal";
import Button from "@registry/ui/Button";
import { useState } from "react";

export default function UseClickOutsideExample() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className="min-h-80 flex justify-center items-center">
      <Modal isOpen={active} setOpen={setActive} className="max-w-[30rem]">
        <h1>
          First click inside the modal to check that it {"won't"} close. Now, click outside the modal to close and see
          how the hook works.
        </h1>
      </Modal>
      <Button onPress={() => setActive(true)}>Open Modal</Button>
    </div>
  );
}
