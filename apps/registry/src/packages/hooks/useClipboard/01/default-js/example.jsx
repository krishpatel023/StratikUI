"use client";

import { useState } from "react";
import useClipboard from "@registry/packages/hooks/useClipboard/01/default-js/useClipboard";
import Button from "@registry/ui/Button";
import Message from "@registry/ui/Message";

export default function UseClipboardExample() {
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
    <div className="text-foreground flex flex-col justify-center items-center gap-8 px-8">
      <div className="flex gap-4">
        <Button onPress={handleCopy}>Copy</Button>
        <Button onPress={handleRead}>Read</Button>
      </div>

      <h1 className="text-2xl underline">Copied Value</h1>
      <Message>
        First Press Copy or copy anything you want and then press the read
        button.
      </Message>
      <p>{value}</p>
    </div>
  );
}
