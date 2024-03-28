"use client";
import { useAnimate } from "framer-motion";
export const AnimatedButton = () => {
  const [scope, animate] = useAnimate();

  const handleMouseEnter = () => {
    animate(
      scope.current,
      {
        y: ["0%", "-30%"],
      },
      {
        duration: 0.5,
        ease: "easeInOut",
      }
    );
  };

  const handleMouseLeave = () => {
    animate(
      scope.current,
      {
        y: ["-30%", "0%"],
      },
      {
        duration: 0.4,
      }
    );
  };
  return (
    <button
      className="relative bg-s_primary text-s_textComplementary @md:w-auto py-2 px-4 rounded-lg flex justify-center items-center overflow-hidden group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="text-s_textComplementary font-semibold z-20 group-hover:text-s_textPrimary">
        Join the waitlist
      </h1>
      <div
        className="min-w-60 min-h-60 absolute top-full rounded-full   bg-s_secondary"
        ref={scope}
      ></div>
    </button>
  );
};
