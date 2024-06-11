import Image, { ImageProps } from "next/image";

export default function ImageComponent({ ...props }) {
  return (
    <>
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    </>
  );
}
