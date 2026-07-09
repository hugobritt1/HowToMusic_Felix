import Image from "next/image";

export function BrandMark({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/brand/mark.svg"
      alt="HowToMusic"
      width={size}
      height={size}
      priority
    />
  );
}
