import { DataDescription, ImplementationNode } from "@/utils/constants";
import FullscreenDemo from "./Helper";

const CodeTsx: string = `import { useState, useCallback, useEffect } from "react";

export const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const requestFullscreen = useCallback((element: HTMLElement) => {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
    // This is for Safari
    else if ((element as any).webkitRequestFullscreen) {
      (element as any).webkitRequestFullscreen();
    }
    // This is for IE11
    else if ((element as any).msRequestFullscreen) {
      (element as any).msRequestFullscreen();
    }
  }, []);

  const exitFullscreen = useCallback(() => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    // This is for Safari
    else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    }
    // This is for IE11
    else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    }
  }, []);

  const handleFullscreenChange = useCallback(() => {
    setIsFullscreen(!!document.fullscreenElement);
  }, []);

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    };
  }, [handleFullscreenChange]);

  return {
    isFullscreen,
    requestFullscreen,
    exitFullscreen,
  };
};`;

const CodeJsx: string = `import { useState, useCallback, useEffect } from "react";

export const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const requestFullscreen = useCallback((element) => {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
    // This is for Safari
    else if ((element).webkitRequestFullscreen) {
      (element).webkitRequestFullscreen();
    }
    // This is for IE11
    else if ((element).msRequestFullscreen) {
      (element).msRequestFullscreen();
    }
  }, []);

  const exitFullscreen = useCallback(() => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    // This is for Safari
    else if ((document).webkitExitFullscreen) {
      (document).webkitExitFullscreen();
    }
    // This is for IE11
    else if ((document).msExitFullscreen) {
      (document).msExitFullscreen();
    }
  }, []);

  const handleFullscreenChange = useCallback(() => {
    setIsFullscreen(!!document.fullscreenElement);
  }, []);

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    };
  }, [handleFullscreenChange]);

  return {
    isFullscreen,
    requestFullscreen,
    exitFullscreen,
  };
};`;

const ExampleTsx = `import React, { useRef } from "react";

const FullscreenDemo: React.FC = () => {
  const { isFullscreen, requestFullscreen, exitFullscreen } = useFullscreen();
  const elementRef = useRef<HTMLDivElement>(null);

  const handleEnterFullscreen = () => {
    if (elementRef.current) {
      requestFullscreen(elementRef.current);
    }
  };

  return (
    <div className="w-full h-80 flex flex-col justify-center items-center gap-8 dark:text-white">
      <div
        ref={elementRef}
        className="w-1/2 h-60 bg-slate-300 dark:bg-neutral-900 dark:text-white flex flex-col justify-center items-center text-center gap-6"
      >
        <p>This content can be viewed in full-screen mode.</p>
        <p>Fullscreen status: {isFullscreen ? "Enabled" : "Disabled"}</p>
        <Button onClick={exitFullscreen}>Exit Fullscreen</Button>
      </div>
      <div className="flex gap-4">
        <Button onClick={handleEnterFullscreen}>Enter Fullscreen</Button>
      </div>
    </div>
  );
};

export default FullscreenDemo;`;

const ExampleJsx = `import React, { useRef } from "react";

const FullscreenDemo= () => {
  const { isFullscreen, requestFullscreen, exitFullscreen } = useFullscreen();
  const elementRef = useRef(null);

  const handleEnterFullscreen = () => {
    if (elementRef.current) {
      requestFullscreen(elementRef.current);
    }
  };

  return (
    <div className="w-full h-80 flex flex-col justify-center items-center gap-8 dark:text-white">
      <div
        ref={elementRef}
        className="w-1/2 h-60 bg-slate-300 dark:bg-neutral-900 dark:text-white flex flex-col justify-center items-center text-center gap-6"
      >
        <p>This content can be viewed in full-screen mode.</p>
        <p>Fullscreen status: {isFullscreen ? "Enabled" : "Disabled"}</p>
        <Button onClick={exitFullscreen}>Exit Fullscreen</Button>
      </div>
      <div className="flex gap-4">
        <Button onClick={handleEnterFullscreen}>Enter Fullscreen</Button>
      </div>
    </div>
  );
};

export default FullscreenDemo;`;

const Implementation: ImplementationNode[] = [
  {
    type: "code",
    content: [
      {
        name: "useFullscreen",
        content: [
          { language: "tsx", code: CodeTsx },
          { language: "jsx", code: CodeJsx },
        ],
      },
      {
        name: "Implementation",
        content: [
          { language: "tsx", code: ExampleTsx },
          { language: "jsx", code: ExampleJsx },
        ],
      },
    ],
  },
];

const Data: DataDescription = {
  name: "useFullscreen",
  description: "Use the useFullscreen hook to switch to the fullscreen mode.",
  implementation: Implementation,
  component: <FullscreenDemo />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
