"use client";

import { useState } from "react";
import useClipboard from "../../code/useClipboard";
import { Button } from "@/packages/ui/Button";

export default function Helper() {
  const { copy, read } = useClipboard();

  const [value, setValue] = useState("Hello, World!");

  const handleCopy = () => {
    copy("Hello, World!");
  };

  const handleRead = async () => {
    const text = await read();
    if (text) setValue(text);
  };

  return (
    <div className="dark:text-white flex flex-col justify-center items-center gap-8 px-8">
      <div className="flex gap-4">
        <Button onClick={handleCopy}>Copy</Button>
        <Button onClick={handleRead}>Read</Button>
      </div>

      <h1 className="text-2xl underline">Coppied Value</h1>
      <p>{value}</p>
    </div>
  );
}
