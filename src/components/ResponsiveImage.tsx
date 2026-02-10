import Image from "next/image";

type ResponsiveImageProps = {
    src: string;
    alt?: string;
  };

export default function ResponsiveImage({
    src, alt=""
}: ResponsiveImageProps) {
  return (
    <div className="image-wrapper">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        style={{ objectFit: "contain" }} // or "cover"
      />
    </div>
  );
}
