"use client";

import Image, { StaticImageData } from "next/image";
import Dummy from "@/assets/Images/Image_2.jpg";
import { twMerge } from "tailwind-merge";
import ArrowHeading from "@/components/ui/ArrowHeading";

interface AvatarProps {
  src?: string | StaticImageData;
  alt?: string;
  className?: string;
  name: string;
  isDisabled?: boolean;
}

export const Avatar = ({
  src,
  alt,
  name,
  className,
  isDisabled,
}: AvatarProps) => {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .substring(0, 2);

  return (
    <div
      className={twMerge(
        "size-12 rounded-full flex justify-center items-center group aria-disabled: bg-gradient-to-r from-blue-500 to-purple-500",
        className
      )}
      aria-disabled={isDisabled}
      aria-label="avatar"
    >
      {src ? (
        <Image
          src={src}
          alt={alt || "avatar"}
          className="rounded-[inherit] size-full"
        />
      ) : (
        <h1 aria-label="initials" className="text-2xl text-primary-foreground">
          {initials}
        </h1>
      )}
    </div>
  );
};

export function AvatarImplementation() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {/* With Image */}
      <ArrowHeading text="With Image" />
      <Avatar src={Dummy} alt="Profile Picture" name="Profile Picture" />
      {/* Without Image */}
      <ArrowHeading text="Fallback / Without Image" />
      <Avatar alt="Profile Picture" name="Profile Picture" />
    </div>
  );
}
