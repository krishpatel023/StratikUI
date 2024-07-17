"use client";

import Image, { StaticImageData } from "next/image";
import Dummy1 from "@/assets/Images/Image_1.jpg";
import Dummy2 from "@/assets/Images/Image_2.jpg";
import Dummy3 from "@/assets/Images/Image_3.jpg";
import Dummy4 from "@/assets/Images/Image_4.jpg";
import Dummy5 from "@/assets/Images/Image_5.jpg";
import Dummy6 from "@/assets/Images/Image_6.jpg";
import Dummy7 from "@/assets/Images/Image_7.jpg";

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

export const AvatarStack = ({
  avatars,
  limit = 5,
  withExtension,
}: {
  avatars: AvatarProps[];
  limit?: number;
  withExtension?: boolean;
}) => {
  const displayedAvatars = avatars.slice(0, limit);
  const remainingCount = avatars.length - limit;

  return (
    <div className="flex flex-row-reverse">
      {withExtension && remainingCount > 0 && (
        <div className="z-10 -ml-4 last:ml-0">
          <Avatar name={`+ ${remainingCount}`} />
        </div>
      )}
      {displayedAvatars.map((avatar, index) => (
        <div
          key={index}
          className="-ml-4 last:ml-0"
          style={{ zIndex: displayedAvatars.length - index }}
        >
          <Avatar {...avatar} />
        </div>
      ))}
    </div>
  );
};

export function StackedAvatarImplementation() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {/* With Extension */}
      <ArrowHeading text="With Extension" />
      <AvatarStack
        avatars={[
          { src: Dummy6, name: "Profile Picture" },
          { src: Dummy2, name: "Profile Picture" },
          { src: Dummy3, name: "Profile Picture" },
          { src: Dummy4, name: "Profile Picture" },
          { src: Dummy5, name: "Profile Picture" },
          { src: Dummy1, name: "Profile Picture" },
          { src: Dummy7, name: "Profile Picture" },
        ]}
        withExtension
      />
      {/* Without Extension */}
      <ArrowHeading text="Without Extension" />
      <AvatarStack
        avatars={[
          { src: Dummy2, name: "Profile Picture" },
          { src: Dummy3, name: "Profile Picture" },
          { src: Dummy4, name: "Profile Picture" },
          { src: Dummy7, name: "Profile Picture" },
          { src: Dummy5, name: "Profile Picture" },
          { src: Dummy6, name: "Profile Picture" },
          { src: Dummy1, name: "Profile Picture" },
        ]}
      />
    </div>
  );
}
