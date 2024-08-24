"use client";

import { useState } from "react";
import { Dropbox } from "./Dropbox";
import DemoImage from "@registry/assets/Images/Image_2.jpg";
import Image from "next/image";

export default function DropboxImplementation() {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string>("");

  function getFiles(files: File[]) {
    setFiles(files);
  }
  function getError(err: string) {
    setError(err);
  }

  return (
    <div className="min-h-[30rem] flex flex-col items-center justify-center gap-4">
      <DemoImageForDropbox />
      <Dropbox
        className="w-80 h-80 border border-outline-secondary border-dashed data-[drag-hover=true]:bg-secondary rounded-lg text-foreground flex justify-center items-center"
        getFiles={getFiles}
        getError={getError}
      >
        <h1>Drop your files here</h1>
      </Dropbox>
      <div className="min-h-40 flex flex-col items-center justify-center text-foreground">
        <h1 className="underline underline-offset-2 mb-4">Files you uploaded</h1>
        {files.map((file, i) => (
          <div key={i} className="flex justify-center items-center gap-4">
            <h2>Name: {file.name}</h2>
            <p>Type : {file.type}</p>
            <Image className="h-20 w-auto" src={URL.createObjectURL(file)} alt={file.name} width={200} height={200} />
          </div>
        ))}
      </div>
    </div>
  );
}

function DemoImageForDropbox() {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text/plain", "Demo image data");
  };

  return (
    <div className="flex flex-col items-center justify-center text-foreground gap-2 mt-10">
      <h1>Demo Image Drag this and upload</h1>
      <Image src={DemoImage} alt="Demo" draggable onDragStart={handleDragStart} className="h-20 w-auto" />
    </div>
  );
}
