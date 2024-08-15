"use client";

import { useState } from "react";
import { Drawer } from "@registry/packages/primitives/drawer/01/default-js/Drawer";
import Button from "@registry/ui/Button";

export default function DrawerImplementation() {
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  return (
    <div className=" -my-10 w-full min-h-[35rem] flex justify-center items-center gap-10 overflow-x-hidden z-0 ">
      <Drawer active={openLeft} setActive={setOpenLeft}>
        <DummyBG />
      </Drawer>
      <Drawer active={openRight} setActive={setOpenRight} direction="right">
        <DummyBG />
      </Drawer>
      <Button onPress={() => setOpenLeft(true)}>Left Sidebar</Button>
      <Button onPress={() => setOpenRight(true)}>Right Sidebar</Button>
    </div>
  );
}

function DummyBG() {
  return (
    <div className="h-[calc(100%-4rem)] w-full rounded-lg border dark:border-neutral-700 border-neutral-300 bg-white dark:bg-neutral-900 p-2 mx-auto">
      <div className="min-h-full min-w-full rounded-[inherit] border dark:border-neutral-700 border-neutral-300 bg-[linear-gradient(45deg,rgba(0,0,0,.05)_7.14%,transparent_7.14%,transparent_50%,rgba(0,0,0,.05)_50%,rgba(0,0,0,.05)_57.14%,transparent_57.14%,transparent);] dark:bg-[linear-gradient(45deg,rgba(0,0,0,.4)_7.14%,transparent_7.14%,transparent_50%,rgba(0,0,0,.4)_50%,rgba(0,0,0,.4)_57.14%,transparent_57.14%,transparent);] bg-[length:10px_10px]"></div>
    </div>
  );
}
